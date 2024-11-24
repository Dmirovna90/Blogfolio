import Button from "../Button/Button";
import style from "./AddPost.module.scss";

interface IProps {
    isDisabled?: boolean;
    buttonType?: 'primary' | 'secondary' | 'secondary2';
}
const AddPost = ({
    isDisabled,
}: IProps
) => {
    return (
        <>
            <div className = {style.addpost}>
                <Button buttonType = {'primary'} isDisabled = {isDisabled} >Primary</Button>
                <Button buttonType = {'secondary'} isDisabled = {isDisabled} >Secondary</Button>
                <Button buttonType = {'secondary2'} isDisabled = {isDisabled} >Secondary 2</Button>
            </div>
        </>
    )
}
export default AddPost