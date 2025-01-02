import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Label } from "@/components/ui/label"

  interface LanguageSelectorProps {
    languageOne: string;
    languageTwo: string;
    onLanguageOneChange: (value: string) => void;
    onLanguageTwoChange: (value: string) => void;
  }

  
export function LanguageSelector(
    { 
        languageOne, 
        languageTwo, 
        onLanguageOneChange, 
        onLanguageTwoChange 
      }: LanguageSelectorProps
) {
    const languages = [
        "English", 
        "Indonesian",
        "Spanish",
        "French",
        "German",
        "Italian",
        "Portuguese",
        "Russian",
        "Chinese",
        "Korean",
        "Japanese",
        "Arabic"
    ]
    return (
        <div className="form-group space-y-2">
            <Label htmlFor="languageSelect" className="text-sm font-medium">Select Language</Label>
            <div className="w-full flex items-center gap-2">
                <Select 
                    value={languageOne}
                    onValueChange={onLanguageOneChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="First Language" />
                    </SelectTrigger>
                    <SelectContent >                {
                            languages.map((language)=>{
                                return (
                                    <SelectItem key={language} value={language}>{language}</SelectItem>
                                )
                            })
                        }
                    </SelectContent>
                </Select>
                <Select 
                    value={languageTwo}
                    onValueChange={onLanguageTwoChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Secondary Language" />
                    </SelectTrigger>
                    <SelectContent>                {
                            languages.map((language)=>{
                                return (
                                    <SelectItem key={language} value={language}>{language}</SelectItem>
                                )
                            })
                        }
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
