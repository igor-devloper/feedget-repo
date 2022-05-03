import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedBackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedBackSuccessStep } from "./Steps/FeedbackSuccess";


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
};

export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedbackType] = useState<FeedBackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto
    ">
      {feedbackSent ? (
        <FeedBackSuccessStep onFeedbackRestartedRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedBackType ? (
            <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedBackContentStep
              feedbackType={feedBackType}
              onFeedbackRestartedRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/igor-devloper">Igor</a>
      </footer>
    </div>
  )
}