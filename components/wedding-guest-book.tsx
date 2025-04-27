/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { db } from "../src/apis/firebase-config";
import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import { FaArrowRight } from "react-icons/fa6";
import "./wedding-guest-book.scss";
import React, { useEffect, useState } from "react";

interface Wish {
  wishes?: string;
  name?: string;
  createdAt?: { nanoseconds: number; seconds: number };
  id: string;
}

interface EntryFormData {
  name: string;
  wishes: string;
  createdAt?: Date;
  hasErrors: {
    nameIsNull: boolean;
    wishesIsNull: boolean;
  };
}
const initForm = {
  name: "",
  wishes: "",
  hasErrors: {
    nameIsNull: false,
    wishesIsNull: false,
  },
};

export default function WeddingGuestBook() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<EntryFormData>(initForm);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      createdAt: new Date(),
      hasErrors: {
        ...prev.hasErrors,
        [`${name}IsNull`]: !value,
      },
    }));
  };

  const wishesCollectionRef = collection(db, "wishes");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, wishes } = formData;
    if (!name) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        hasErrors: {
          ...prevFormData.hasErrors,
          nameIsNull: true,
        },
      }));
    }
    if (!wishes) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        hasErrors: {
          ...prevFormData.hasErrors,
          wishesIsNull: true,
        },
      }));
    }
    if (!name || !wishes) return;

    setSubmitting(true);

    try {
      await addDoc(wishesCollectionRef, formData);
      setFormData(initForm);
      setSubmitted(true);
    } catch (ignored) {
      console.log(ignored);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(wishesCollectionRef, (snapshot) => {
      const wishesList: Wish[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sortedData = wishesList.toSorted((a, b) => {
        if (a.createdAt && b.createdAt) {
          const millisecondsA =
            a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1000000;
          const millisecondsB =
            b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1000000;
          return millisecondsB - millisecondsA;
        }
        return 0;
      });
      setWishes(sortedData);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="dy-wedding-guest-book">
      <div className="dy-wedding-guest-book__header">Sổ lưu bút</div>
      <div className="dy-wedding-guest-book__container">
        <form
          onSubmit={handleSubmit}
          className="dy-wedding-guest-book__container__form"
        >
          <div className="form-control">
            <input
              type="text"
              name="name"
              className="name-text"
              placeholder="Bạn là..."
              value={formData.name}
              onChange={handleChange}
            />
            {formData?.hasErrors?.nameIsNull && (
              <span className="error-msg">Hãy để lại tên của bạn ...</span>
            )}
          </div>

          <div className="form-control">
            <textarea
              className="wishes-text"
              name="wishes"
              placeholder="Lời chúc của bạn là..."
              value={formData.wishes}
              onChange={handleChange}
            />
            {formData?.hasErrors?.wishesIsNull && (
              <span className="error-msg">Hãy để lại lời chúc của bạn...</span>
            )}
          </div>
          {!submitted ? (
            <button className="button" type="submit" disabled={submitting}>
              {submitting ? (
                <span>LỜI CHÚC CỦA BẠN ĐANG ĐƯỢC GỬI ĐI...</span>
              ) : (
                <>
                  <span>GỬI LỜI CHÚC</span> <FaArrowRight />
                </>
              )}
            </button>
          ) : (
            <div className="thank-you-msg">
              Cảm ơn lời chúc từ bạn, hẹn gặp lại tại đám cưới của tụi mình nhé.
            </div>
          )}
        </form>
        <div className="dy-wedding-guest-book__container__wishes">
          {wishes.length > 0 &&
            wishes.map((wish) => {
              return (
                <div key={wish.id} className="wish">
                  <div className="name">{wish.name}</div>
                  <div className="wishes">{wish.wishes}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
