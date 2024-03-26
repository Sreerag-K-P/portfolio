import { useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";
import { useProjectStore } from "./store";
type Props = {
  children: ReactNode;
  projectName: string;
};
function Paragraph({ children, projectName }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }); //useInview can measure weather the ref element is isn the view or not
  //   console.log(isInView, children);
  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  const inViewProject = useProjectStore((state) => state.inViewProject);

  useEffect(() => {
    if (isInView) setInViewProject(projectName);
    if (!isInView && inViewProject === projectName) setInViewProject(null);
  }, [isInView, projectName, setInViewProject, inViewProject]);

  return (
    <p
      ref={ref}
      className={`${
        isInView ? "text-white " : " text-white/10"
      }  leading-8 tracking-wider py-16  transition-colors font-medium text-wrap text-justify`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
