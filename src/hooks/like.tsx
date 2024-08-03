import { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { getData, storeData } from "../utils"

const useLikesAndSelected = () => {
    const [likes, setLikes] = useState<number[]>([])
    const [selectedClasses, setSelectedClasses] = useState<number[]>([])

    useEffect(() => {
        getData('likes').then((result) => {
            setLikes(result ?? [])
        });

        getData('selectedClasses').then((result) => {
            setSelectedClasses(result ?? [])
        });

    }, [])

    const toggleLike = (id: number) => {
        let tempLikes = [...likes];
        if (tempLikes.indexOf(id) > -1) {
            tempLikes = tempLikes.filter((e) => e !== id)
        }
        else {
            tempLikes = [...tempLikes, id];
        }
        setLikes(tempLikes)
        storeData('likes', tempLikes)
    }

    const toggleSelected = (id: number) => {
        let tempSelectedClasses = [...selectedClasses];
        if (tempSelectedClasses.indexOf(id) > -1) {
            tempSelectedClasses = tempSelectedClasses.filter((e) => e !== id)
        }
        else {
            tempSelectedClasses = [...tempSelectedClasses, id];
        }
        setSelectedClasses(tempSelectedClasses)
        storeData('selectedClasses', tempSelectedClasses)
    }

    const isLiked = (id: number) => {
        return likes.indexOf(id) > -1
    }

    const isSelectedClass = (id: number) => {
        return selectedClasses.indexOf(id) > -1
    }

    const LikeComponent = ({ id }: { id: number }) => {
        const liked = isLiked(id);
        return <TouchableOpacity onPress={() => toggleLike(id)} style={{ position: 'absolute', zIndex: 1, right: 20, top: 10 }}>
            <AntDesign name={liked ? 'heart' : 'hearto'} size={20} color={liked ? 'red' : '#FFF'} />
        </TouchableOpacity>
    }

    return { LikeComponent, isSelectedClass, toggleSelected }
}

export default useLikesAndSelected