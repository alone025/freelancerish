import {FooterSection} from "@/src/components";

export default function LayoutComponent({children}) {

    return (
        <>
            {children}

            <FooterSection/>
        </>
    );
};

