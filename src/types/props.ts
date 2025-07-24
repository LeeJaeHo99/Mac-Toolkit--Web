export interface QuestionProps {
    title: string;
    answer: string;
}

export interface TableProps {
    headerList: string[];
    bodyList: {
        title: string;
        answer: string;
    }[];
}

export interface AppleWindowProps {
    activeTab: number;
    headerList: string[];
    bodyList: {
        title: string;
        answer: string;
    }[];
    questionList: QuestionProps[];
    textList: string[];
    gifUrl: string;
    review: {
        text: string;
        star: number;
    }[];
    star: string;
    handleCloseActiveTab: () => void;
}

export type AppleWindowItemProps = Omit<AppleWindowProps, "handleCloseActiveTab">;

export interface ProductProps {
    icon: string;
    name: string;
    text: string;
    headerList: string[];
    bodyList: {
        title: string;
        answer: string;
    }[];
    questionList: QuestionProps[];
    textList: string[];
    gifUrl: string;
    review: {
        text: string;
        star: number;
    }[];
    download: number;
}

export interface PreviewProps {
    textList: string[];
    gifUrl: string;
}

export interface ReviewProps {
    review: {
        text: string;
        star: number;
    }[];
    star: string;
}