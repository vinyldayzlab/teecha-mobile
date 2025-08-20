import { TextInput, View, Text } from "react-native";
import { SearchIcon } from "./icons";
import IconButton from "./buttons/IconButton";
import { AddIcon } from "./icons/AddIcon";

type SearchBarProps = {
  placeholder: string;
  onPress?: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onPress }) => {
  return (
    <View className="flex flex-row gap-4 px-3 py-4 justify-between items-center">
      <View className="flex flex-row flex-1 gap-1 rounded-full bg-neutral-500 px-4 py-3 items-center">
        <SearchIcon width={20} height={20} />
        <TextInput placeholder={placeholder} className="flex-1" />
      </View>
      <View>
        <IconButton
          icon={<AddIcon />}
          // type="secondary"
          onPress={onPress ?? (() => console.log("clicked"))}
        />
      </View>
    </View>
  );
};

export default SearchBar;
