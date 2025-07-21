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
    youtubeUrl: string;
    questionList: QuestionProps[];
    handleCloseActiveTab: () => void;
}

export type AppleWindowItemProps = Omit<AppleWindowProps, "handleCloseActiveTab">;

export interface ProductProps {
    name: string;
    text: string;
    headerList: string[];
    bodyList: {
        title: string;
        answer: string;
    }[];
    youtubeUrl: string;
    questionList: QuestionProps[];
}