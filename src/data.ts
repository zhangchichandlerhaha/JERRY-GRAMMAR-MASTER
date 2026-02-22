import { Question, Difficulty, GrammarPoint } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    sentence: "______ tired, she still finished the report on time.",
    options: [
      { id: 'a', text: 'Although' },
      { id: 'b', text: 'Because' },
      { id: 'c', text: 'Unless' },
      { id: 'd', text: 'Since' }
    ],
    correctOptionId: 'a',
    explanation: {
      rule: "Although 引导让步状语从句，表示“尽管”。句子前半部分说“累”，后半部分说“按时完成”，存在转折关系。",
      example: "Although it was raining, they went for a walk.",
      commonMistake: "容易误用 Because，但 Because 表示因果关系，不符合语境。",
      reviewLink: "https://www.bing.com/search?q=although+usage+grammar"
    },
    difficulty: Difficulty.Beginner,
    category: GrammarPoint.AdverbialClause
  },
  {
    id: 2,
    sentence: "The boy ______ is standing under the tree is my brother.",
    options: [
      { id: 'a', text: 'which' },
      { id: 'b', text: 'who' },
      { id: 'c', text: 'whom' },
      { id: 'd', text: 'whose' }
    ],
    correctOptionId: 'b',
    explanation: {
      rule: "who 引导定语从句，先行词是人（The boy），且在从句中作主语。",
      example: "The girl who won the race is my friend.",
      commonMistake: "误用 which，which 的先行词通常是物。",
      reviewLink: "https://www.bing.com/search?q=relative+clause+who+vs+which"
    },
    difficulty: Difficulty.Beginner,
    category: GrammarPoint.RelativeClause
  },
  {
    id: 3,
    sentence: "______ the homework, the student went out to play football.",
    options: [
      { id: 'a', text: 'Finish' },
      { id: 'b', text: 'Finished' },
      { id: 'c', text: 'Finishing' },
      { id: 'd', text: 'Having finished' }
    ],
    correctOptionId: 'd',
    explanation: {
      rule: "Having finished 是现在分词的完成式，表示该动作发生在主句动作（went out）之前。",
      example: "Having seen the movie twice, I don't want to see it again.",
      commonMistake: "误选 Finishing，虽然 Finishing 也可以作状语，但 Having finished 更强调先后顺序。",
      reviewLink: "https://www.bing.com/search?q=present+participle+perfect+form"
    },
    difficulty: Difficulty.Advanced,
    category: GrammarPoint.NonFiniteVerb
  },
  {
    id: 4,
    sentence: "I don't know ______ he will come or not.",
    options: [
      { id: 'a', text: 'if' },
      { id: 'b', text: 'whether' },
      { id: 'c', text: 'that' },
      { id: 'd', text: 'what' }
    ],
    correctOptionId: 'b',
    explanation: {
      rule: "whether ... or not 是固定搭配，表示“是否”。虽然 if 也可以表示“是否”，但在与 or not 连用时，通常首选 whether。",
      example: "I wonder whether it will rain tomorrow.",
      commonMistake: "误选 that，that 引导宾语从句时表示陈述事实，不含“是否”之意。",
      reviewLink: "https://www.bing.com/search?q=whether+vs+if+or+not"
    },
    difficulty: Difficulty.Intermediate,
    category: GrammarPoint.NounClause
  },
  {
    id: 5,
    sentence: "This is the place ______ I first met my best friend.",
    options: [
      { id: 'a', text: 'which' },
      { id: 'b', text: 'that' },
      { id: 'c', text: 'where' },
      { id: 'd', text: 'when' }
    ],
    correctOptionId: 'c',
    explanation: {
      rule: "where 引导定语从句，先行词是地点（the place），且在从句中作地点状语。",
      example: "The house where I live is very old.",
      commonMistake: "误选 which，如果从句缺主语或宾语才选 which。此处 I met my friend 结构完整，缺状语。",
      reviewLink: "https://www.bing.com/search?q=relative+adverb+where"
    },
    difficulty: Difficulty.Intermediate,
    category: GrammarPoint.RelativeClause
  },
  {
    id: 6,
    sentence: "______ by the noise, the baby started to cry.",
    options: [
      { id: 'a', text: 'Waking' },
      { id: 'b', text: 'Woken' },
      { id: 'c', text: 'Wake' },
      { id: 'd', text: 'To wake' }
    ],
    correctOptionId: 'b',
    explanation: {
      rule: "过去分词 Woken 作状语，表示被动关系（婴儿被吵醒）。",
      example: "Moved by the story, she cried.",
      commonMistake: "误选 Waking，现在分词表示主动，而婴儿是被吵醒的。",
      reviewLink: "https://www.bing.com/search?q=past+participle+as+adverbial"
    },
    difficulty: Difficulty.Intermediate,
    category: GrammarPoint.NonFiniteVerb
  },
  {
    id: 7,
    sentence: "Weather ______, we will go for a picnic this weekend.",
    options: [
      { id: 'a', text: 'permits' },
      { id: 'b', text: 'permitting' },
      { id: 'c', text: 'permitted' },
      { id: 'd', text: 'to permit' }
    ],
    correctOptionId: 'b',
    explanation: {
      rule: "独立主格结构。Weather 与 permit 是主动关系，且表示条件，使用现在分词 permitting。",
      example: "Time permitting, I will visit you.",
      commonMistake: "误选 permits，因为 Weather permits 是一个完整的句子，不能直接接逗号连接另一个句子。",
      reviewLink: "https://www.bing.com/search?q=absolute+construction+english"
    },
    difficulty: Difficulty.Advanced,
    category: GrammarPoint.AbsoluteConstruction
  },
  {
    id: 8,
    sentence: "He spoke so fast ______ I couldn't follow him.",
    options: [
      { id: 'a', text: 'that' },
      { id: 'b', text: 'as' },
      { id: 'c', text: 'than' },
      { id: 'd', text: 'which' }
    ],
    correctOptionId: 'a',
    explanation: {
      rule: "so...that... 引导结果状语从句，表示“如此...以至于...”。",
      example: "He was so tired that he fell asleep immediately.",
      commonMistake: "误选 which，which 不能引导结果状语从句。",
      reviewLink: "https://www.bing.com/search?q=so+that+result+clause"
    },
    difficulty: Difficulty.Beginner,
    category: GrammarPoint.AdverbialClause
  }
];
