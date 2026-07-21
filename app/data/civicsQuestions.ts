export type Category =
  | 'Principles of American Government'
  | 'System of Government'
  | 'Rights and Responsibilities'
  | 'American History: Colonial Period and Independence'
  | 'American History: The 1800s'
  | 'American History: Recent History'
  | 'American Symbols'
  | 'National Holidays';

export interface CivicsQuestion {
  id: number;
  category: Category;
  question: string;
  answers: string[];
}

export const civicsQuestions: CivicsQuestion[] = [
  // Principles of American Government (15)
  { id: 1, category: 'Principles of American Government', question: 'What is the supreme law of the land?', answers: ['the Constitution'] },
  { id: 2, category: 'Principles of American Government', question: 'What does the Constitution do?', answers: ['sets up the government', 'defines the government', 'protects basic rights of Americans'] },
  { id: 3, category: 'Principles of American Government', question: 'The idea of self-government is in the first three words of the Constitution. What are these words?', answers: ['We the People'] },
  { id: 4, category: 'Principles of American Government', question: 'What is an amendment?', answers: ['a change to the Constitution', 'an addition to the Constitution'] },
  { id: 5, category: 'Principles of American Government', question: 'What do we call the first ten amendments to the Constitution?', answers: ['the Bill of Rights'] },
  { id: 6, category: 'Principles of American Government', question: 'What is one right or freedom from the First Amendment?', answers: ['speech', 'religion', 'assembly', 'press', 'petition the government'] },
  { id: 7, category: 'Principles of American Government', question: 'How many amendments does the Constitution have?', answers: ['twenty-seven', '27'] },
  { id: 8, category: 'Principles of American Government', question: 'What did the Declaration of Independence do?', answers: ['announced our independence from Great Britain', 'declared our independence from Great Britain', 'said that the United States is free from Great Britain'] },
  { id: 9, category: 'Principles of American Government', question: 'What are two rights in the Declaration of Independence?', answers: ['life and liberty', 'liberty and the pursuit of happiness', 'life and the pursuit of happiness'] },
  { id: 10, category: 'Principles of American Government', question: 'What is freedom of religion?', answers: ['You can practice any religion, or not practice a religion'] },
  { id: 11, category: 'Principles of American Government', question: 'What is the economic system in the United States?', answers: ['capitalist economy', 'market economy'] },
  { id: 12, category: 'Principles of American Government', question: 'What is the "rule of law"?', answers: ['Everyone must follow the law', 'Leaders must obey the law', 'Government must obey the law', 'No one is above the law'] },
  { id: 13, category: 'Principles of American Government', question: 'Name one branch or part of the government.', answers: ['Congress', 'legislative', 'President', 'executive', 'the courts', 'judicial'] },
  { id: 14, category: 'Principles of American Government', question: 'What stops one branch of government from becoming too powerful?', answers: ['checks and balances', 'separation of powers'] },
  { id: 15, category: 'Principles of American Government', question: 'Who is in charge of the executive branch?', answers: ['the President'] },

  // System of Government (47)
  { id: 16, category: 'System of Government', question: 'Who makes federal laws?', answers: ['Congress', 'Senate and House of Representatives', 'U.S. or national legislature'] },
  { id: 17, category: 'System of Government', question: 'What are the two parts of the U.S. Congress?', answers: ['the Senate and House of Representatives'] },
  { id: 18, category: 'System of Government', question: 'How many U.S. Senators are there?', answers: ['one hundred', '100'] },
  { id: 19, category: 'System of Government', question: 'We elect a U.S. Senator for how many years?', answers: ['six', '6'] },
  { id: 20, category: 'System of Government', question: 'Who is one of your state\'s U.S. Senators now?', answers: ['Chuck Schumer', 'Kirsten Gillibrand'] },
  { id: 21, category: 'System of Government', question: 'The House of Representatives has how many voting members?', answers: ['four hundred thirty-five', '435'] },
  { id: 22, category: 'System of Government', question: 'We elect a U.S. Representative for how many years?', answers: ['two', '2'] },
  { id: 23, category: 'System of Government', question: 'Name your U.S. Representative.', answers: ['Alexandria Ocasio-Cortez'] },
  { id: 24, category: 'System of Government', question: 'Who does a U.S. Senator represent?', answers: ['all people of the state'] },
  { id: 25, category: 'System of Government', question: 'Why do some states have more Representatives than other states?', answers: ['because of the state\'s population', 'because they have more people', 'because some states have more people'] },
  { id: 26, category: 'System of Government', question: 'We elect a President for how many years?', answers: ['four', '4'] },
  { id: 27, category: 'System of Government', question: 'In what month do we vote for President?', answers: ['November'] },
  { id: 28, category: 'System of Government', question: 'What is the name of the President of the United States now?', answers: ['Donald Trump', 'Donald J. Trump', 'Trump'] },
  { id: 29, category: 'System of Government', question: 'What is the name of the Vice President of the United States now?', answers: ['JD Vance', 'J.D. Vance', 'Vance'] },
  { id: 30, category: 'System of Government', question: 'If the President can no longer serve, who becomes President?', answers: ['the Vice President'] },
  { id: 31, category: 'System of Government', question: 'If both the President and the Vice President can no longer serve, who becomes President?', answers: ['the Speaker of the House'] },
  { id: 32, category: 'System of Government', question: 'Who is the Commander in Chief of the military?', answers: ['the President'] },
  { id: 33, category: 'System of Government', question: 'Who signs bills to become laws?', answers: ['the President'] },
  { id: 34, category: 'System of Government', question: 'Who vetoes bills?', answers: ['the President'] },
  { id: 35, category: 'System of Government', question: 'What does the President\'s Cabinet do?', answers: ['advises the President'] },
  { id: 36, category: 'System of Government', question: 'What are two Cabinet-level positions?', answers: ['Secretary of Agriculture', 'Secretary of Commerce', 'Secretary of Defense', 'Secretary of Education', 'Secretary of Energy', 'Secretary of Health and Human Services', 'Secretary of Homeland Security', 'Secretary of Housing and Urban Development', 'Secretary of the Interior', 'Secretary of Labor', 'Secretary of State', 'Secretary of Transportation', 'Secretary of the Treasury', 'Secretary of Veterans Affairs', 'Attorney General', 'Vice President'] },
  { id: 37, category: 'System of Government', question: 'What does the judicial branch do?', answers: ['reviews laws', 'explains laws', 'resolves disputes', 'decides if a law goes against the Constitution'] },
  { id: 38, category: 'System of Government', question: 'What is the highest court in the United States?', answers: ['the Supreme Court'] },
  { id: 39, category: 'System of Government', question: 'How many justices are on the Supreme Court?', answers: ['nine', '9'] },
  { id: 40, category: 'System of Government', question: 'Who is the Chief Justice of the United States now?', answers: ['John Roberts', 'John G. Roberts Jr.'] },
  { id: 41, category: 'System of Government', question: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?', answers: ['to print money', 'to declare war', 'to create an army', 'to make treaties'] },
  { id: 42, category: 'System of Government', question: 'Under our Constitution, some powers belong to the states. What is one power of the states?', answers: ['provide schooling and education', 'provide protection (police)', 'provide safety (fire departments)', 'give a driver\'s license', 'approve zoning and land use'] },
  { id: 43, category: 'System of Government', question: 'Who is the Governor of your state now?', answers: ['Kathy Hochul'] },
  { id: 44, category: 'System of Government', question: 'What is the capital of your state?', answers: ['Albany'] },
  { id: 45, category: 'System of Government', question: 'What are the two major political parties in the United States?', answers: ['Democratic and Republican'] },
  { id: 46, category: 'System of Government', question: 'What is the political party of the President now?', answers: ['Republican Party', 'Republican'] },
  { id: 47, category: 'System of Government', question: 'What is the name of the Speaker of the House of Representatives now?', answers: ['Mike Johnson'] },
  { id: 48, category: 'System of Government', question: 'There are four amendments to the Constitution about who can vote. Describe one of them.', answers: ['Citizens eighteen and older can vote', 'You don\'t have to pay a poll tax to vote', 'Any citizen can vote', 'A male citizen of any race can vote'] },
  { id: 49, category: 'System of Government', question: 'What is one responsibility that is only for United States citizens?', answers: ['serve on a jury', 'vote in a federal election'] },
  { id: 50, category: 'System of Government', question: 'Name one right only for United States citizens.', answers: ['vote in a federal election', 'run for federal office'] },
  { id: 51, category: 'System of Government', question: 'What are two rights of everyone living in the United States?', answers: ['freedom of expression', 'freedom of speech', 'freedom of assembly', 'freedom to petition the government', 'freedom of religion', 'the right to bear arms'] },
  { id: 52, category: 'System of Government', question: 'What do we show loyalty to when we say the Pledge of Allegiance?', answers: ['the United States', 'the flag'] },
  { id: 53, category: 'System of Government', question: 'What is one promise you make when you become a United States citizen?', answers: ['give up loyalty to other countries', 'defend the Constitution and laws of the United States', 'obey the laws of the United States', 'serve in the U.S. military if needed', 'serve the nation if needed', 'be loyal to the United States'] },
  { id: 54, category: 'System of Government', question: 'How old do citizens have to be to vote for President?', answers: ['eighteen', '18'] },
  { id: 55, category: 'System of Government', question: 'What are two ways that Americans can participate in their democracy?', answers: ['vote', 'join a political party', 'help with a campaign', 'join a civic group', 'join a community group', 'give an elected official your opinion on an issue', 'call Senators and Representatives', 'publicly support or oppose an issue or policy', 'run for office', 'write to a newspaper'] },
  { id: 56, category: 'System of Government', question: 'When is the last day you can send in federal income tax forms?', answers: ['April 15'] },
  { id: 57, category: 'System of Government', question: 'When must all men register for the Selective Service?', answers: ['at age eighteen', 'between eighteen and twenty-six'] },
  { id: 58, category: 'System of Government', question: 'What is one reason colonists came to America?', answers: ['freedom', 'political liberty', 'religious freedom', 'economic opportunity', 'to practice their religion', 'to escape persecution'] },
  { id: 59, category: 'System of Government', question: 'Who lived in America before the Europeans arrived?', answers: ['American Indians', 'Native Americans'] },
  { id: 60, category: 'System of Government', question: 'What group of people was taken to America and sold as slaves?', answers: ['Africans', 'people from Africa'] },
  { id: 61, category: 'System of Government', question: 'Why did the colonists fight the British?', answers: ['because of high taxes', 'because the British army stayed in their houses', 'because they didn\'t have self-government'] },
  { id: 62, category: 'System of Government', question: 'Who wrote the Declaration of Independence?', answers: ['Thomas Jefferson'] },

  // Rights and Responsibilities (10)
  { id: 63, category: 'Rights and Responsibilities', question: 'What territory did the United States buy from France in 1803?', answers: ['the Louisiana Territory', 'Louisiana'] },
  { id: 64, category: 'Rights and Responsibilities', question: 'Name one war fought by the United States in the 1800s.', answers: ['War of 1812', 'Mexican-American War', 'Civil War', 'Spanish-American War'] },
  { id: 65, category: 'Rights and Responsibilities', question: 'What did the Emancipation Proclamation do?', answers: ['freed the slaves', 'freed slaves in the Confederacy', 'freed slaves in the Confederate states', 'freed slaves in most Southern states'] },
  { id: 66, category: 'Rights and Responsibilities', question: 'What did Susan B. Anthony do?', answers: ['fought for women\'s rights', 'fought for civil rights'] },
  { id: 67, category: 'Rights and Responsibilities', question: 'Name one war fought by the United States in the 1900s.', answers: ['World War I', 'World War II', 'Korean War', 'Vietnam War', 'Gulf War'] },
  { id: 68, category: 'Rights and Responsibilities', question: 'Who was President during World War I?', answers: ['Woodrow Wilson', 'Wilson'] },
  { id: 69, category: 'Rights and Responsibilities', question: 'Who was President during the Great Depression and World War II?', answers: ['Franklin Roosevelt', 'Roosevelt', 'FDR'] },
  { id: 70, category: 'Rights and Responsibilities', question: 'Who did the United States fight in World War II?', answers: ['Japan, Germany, and Italy'] },
  { id: 71, category: 'Rights and Responsibilities', question: 'Before he was President, Eisenhower was a general. What war was he in?', answers: ['World War II'] },
  { id: 72, category: 'Rights and Responsibilities', question: 'During the Cold War, what was the main concern of the United States?', answers: ['Communism'] },

  // American History: Colonial Period and Independence (17)
  { id: 73, category: 'American History: Colonial Period and Independence', question: 'What movement tried to end racial discrimination?', answers: ['civil rights movement'] },
  { id: 74, category: 'American History: Colonial Period and Independence', question: 'What did Martin Luther King Jr. do?', answers: ['fought for civil rights', 'worked for equality for all Americans'] },
  { id: 75, category: 'American History: Colonial Period and Independence', question: 'What major event happened on September 11, 2001 in the United States?', answers: ['Terrorists attacked the United States'] },
  { id: 76, category: 'American History: Colonial Period and Independence', question: 'Name one American Indian tribe in the United States.', answers: ['Cherokee', 'Navajo', 'Sioux', 'Chippewa', 'Choctaw', 'Pueblo', 'Apache', 'Iroquois', 'Creek', 'Blackfeet', 'Seminole', 'Cheyenne', 'Arawak', 'Shawnee', 'Mohegan', 'Huron', 'Oneida', 'Lakota', 'Crow', 'Teton', 'Hopi', 'Inuit'] },
  { id: 77, category: 'American History: Colonial Period and Independence', question: 'Name one of the two longest rivers in the United States.', answers: ['Missouri River', 'Mississippi River'] },
  { id: 78, category: 'American History: Colonial Period and Independence', question: 'What ocean is on the West Coast of the United States?', answers: ['Pacific Ocean'] },
  { id: 79, category: 'American History: Colonial Period and Independence', question: 'What ocean is on the East Coast of the United States?', answers: ['Atlantic Ocean'] },
  { id: 80, category: 'American History: Colonial Period and Independence', question: 'Name one U.S. territory.', answers: ['Puerto Rico', 'U.S. Virgin Islands', 'American Samoa', 'Northern Mariana Islands', 'Guam'] },
  { id: 81, category: 'American History: Colonial Period and Independence', question: 'Name one state that borders Canada.', answers: ['Maine', 'New Hampshire', 'Vermont', 'New York', 'Pennsylvania', 'Ohio', 'Michigan', 'Minnesota', 'North Dakota', 'Montana', 'Idaho', 'Washington', 'Alaska'] },
  { id: 82, category: 'American History: Colonial Period and Independence', question: 'Name one state that borders Mexico.', answers: ['California', 'Arizona', 'New Mexico', 'Texas'] },
  { id: 83, category: 'American History: Colonial Period and Independence', question: 'What is the capital of the United States?', answers: ['Washington D.C.'] },
  { id: 84, category: 'American History: Colonial Period and Independence', question: 'Where is the Statue of Liberty?', answers: ['New York Harbor', 'Liberty Island', 'New Jersey', 'New York'] },
  { id: 85, category: 'American History: Colonial Period and Independence', question: 'Why does the flag have 13 stripes?', answers: ['because there were 13 original colonies', 'because the stripes represent the original colonies'] },
  { id: 86, category: 'American History: Colonial Period and Independence', question: 'Why does the flag have 50 stars?', answers: ['because there is one star for each state', 'because each star represents a state', 'because there are 50 states'] },
  { id: 87, category: 'American History: Colonial Period and Independence', question: 'What is the name of the national anthem?', answers: ['The Star-Spangled Banner'] },
  { id: 88, category: 'American History: Colonial Period and Independence', question: 'What do we call the first 10 amendments to the Constitution?', answers: ['the Bill of Rights'] },
  { id: 89, category: 'American History: Colonial Period and Independence', question: 'When was the Constitution written?', answers: ['1787'] },

  // American History: The 1800s (10)
  { id: 90, category: 'American History: The 1800s', question: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.', answers: ['James Madison', 'Alexander Hamilton', 'John Jay', 'Publius'] },
  { id: 91, category: 'American History: The 1800s', question: 'What is one thing Benjamin Franklin is famous for?', answers: ['U.S. diplomat', 'oldest member of the Constitutional Convention', 'first Postmaster General of the United States', 'writer of "Poor Richard\'s Almanac"', 'started the first free libraries'] },
  { id: 92, category: 'American History: The 1800s', question: 'Who is the "Father of Our Country"?', answers: ['George Washington'] },
  { id: 93, category: 'American History: The 1800s', question: 'Who was the first President?', answers: ['George Washington'] },
  { id: 94, category: 'American History: The 1800s', question: 'What was one important thing Abraham Lincoln did?', answers: ['freed the slaves', 'saved the Union', 'led the United States during the Civil War'] },
  { id: 95, category: 'American History: The 1800s', question: 'Name the U.S. war between the North and the South.', answers: ['the Civil War'] },
  { id: 96, category: 'American History: The 1800s', question: 'Name one problem that led to the Civil War.', answers: ['slavery', 'economic reasons', 'states\' rights'] },
  { id: 97, category: 'American History: The 1800s', question: 'What was one important thing that Abraham Lincoln did?', answers: ['freed the slaves', 'saved the Union', 'led the United States during the Civil War'] },
  { id: 98, category: 'American History: The 1800s', question: 'What did the Emancipation Proclamation do?', answers: ['freed the slaves', 'freed slaves in the Confederacy', 'freed slaves in the Confederate states', 'freed slaves in most Southern states'] },
  { id: 99, category: 'American History: The 1800s', question: 'What did Susan B. Anthony do?', answers: ['fought for women\'s rights', 'fought for civil rights'] },

  // American History: Recent History (19)
  { id: 100, category: 'American History: Recent History', question: 'Name one war fought by the United States in the 1900s.', answers: ['World War I', 'World War II', 'Korean War', 'Vietnam War', 'Gulf War'] },
  { id: 101, category: 'American History: Recent History', question: 'Who was President during World War I?', answers: ['Woodrow Wilson', 'Wilson'] },
  { id: 102, category: 'American History: Recent History', question: 'Who was President during the Great Depression and World War II?', answers: ['Franklin Roosevelt', 'Roosevelt', 'FDR'] },
  { id: 103, category: 'American History: Recent History', question: 'Who did the United States fight in World War II?', answers: ['Japan, Germany, and Italy'] },
  { id: 104, category: 'American History: Recent History', question: 'Before he was President, Eisenhower was a general. What war was he in?', answers: ['World War II'] },
  { id: 105, category: 'American History: Recent History', question: 'During the Cold War, what was the main concern of the United States?', answers: ['Communism'] },
  { id: 106, category: 'American History: Recent History', question: 'What movement tried to end racial discrimination?', answers: ['civil rights movement'] },
  { id: 107, category: 'American History: Recent History', question: 'What did Martin Luther King Jr. do?', answers: ['fought for civil rights', 'worked for equality for all Americans'] },
  { id: 108, category: 'American History: Recent History', question: 'What major event happened on September 11, 2001, in the United States?', answers: ['Terrorists attacked the United States'] },
  { id: 109, category: 'American History: Recent History', question: 'Name one American Indian tribe in the United States.', answers: ['Cherokee', 'Navajo', 'Sioux', 'Chippewa', 'Choctaw', 'Pueblo', 'Apache', 'Iroquois', 'Creek', 'Blackfeet', 'Seminole', 'Cheyenne', 'Arawak', 'Shawnee', 'Mohegan', 'Huron', 'Oneida', 'Lakota', 'Crow', 'Teton', 'Hopi', 'Inuit'] },
  { id: 110, category: 'American History: Recent History', question: 'Name one of the two longest rivers in the United States.', answers: ['Missouri River', 'Mississippi River'] },
  { id: 111, category: 'American History: Recent History', question: 'What ocean is on the West Coast of the United States?', answers: ['Pacific Ocean'] },
  { id: 112, category: 'American History: Recent History', question: 'What ocean is on the East Coast of the United States?', answers: ['Atlantic Ocean'] },
  { id: 113, category: 'American History: Recent History', question: 'Name one U.S. territory.', answers: ['Puerto Rico', 'U.S. Virgin Islands', 'American Samoa', 'Northern Mariana Islands', 'Guam'] },
  { id: 114, category: 'American History: Recent History', question: 'Name one state that borders Canada.', answers: ['Maine', 'New Hampshire', 'Vermont', 'New York', 'Pennsylvania', 'Ohio', 'Michigan', 'Minnesota', 'North Dakota', 'Montana', 'Idaho', 'Washington', 'Alaska'] },
  { id: 115, category: 'American History: Recent History', question: 'Name one state that borders Mexico.', answers: ['California', 'Arizona', 'New Mexico', 'Texas'] },
  { id: 116, category: 'American History: Recent History', question: 'What is the capital of the United States?', answers: ['Washington D.C.'] },
  { id: 117, category: 'American History: Recent History', question: 'Where is the Statue of Liberty?', answers: ['New York Harbor', 'Liberty Island', 'New Jersey', 'New York'] },
  { id: 118, category: 'American History: Recent History', question: 'Why does the flag have 13 stripes?', answers: ['because there were 13 original colonies', 'because the stripes represent the original colonies'] },

  // American Symbols (6)
  { id: 119, category: 'American Symbols', question: 'What is the name of the national anthem?', answers: ['The Star-Spangled Banner'] },
  { id: 120, category: 'American Symbols', question: 'Why does the flag have 50 stars?', answers: ['because there is one star for each state', 'because each star represents a state', 'because there are 50 states'] },
  { id: 121, category: 'American Symbols', question: 'Why does the flag have 13 stripes?', answers: ['because there were 13 original colonies', 'because the stripes represent the original colonies'] },
  { id: 122, category: 'American Symbols', question: 'Where is the Statue of Liberty?', answers: ['New York Harbor', 'Liberty Island', 'New Jersey', 'New York'] },
  { id: 123, category: 'American Symbols', question: 'What is the capital of the United States?', answers: ['Washington D.C.'] },
  { id: 124, category: 'American Symbols', question: 'What do we call the first 10 amendments to the Constitution?', answers: ['the Bill of Rights'] },

  // National Holidays (4)
  { id: 125, category: 'National Holidays', question: 'What is Independence Day?', answers: ['July 4th'] },
  { id: 126, category: 'National Holidays', question: 'Name two national U.S. holidays.', answers: ['New Year\'s Day and Independence Day', 'Thanksgiving and Christmas', 'Memorial Day and Labor Day'] },
  { id: 127, category: 'National Holidays', question: 'When do we celebrate Independence Day?', answers: ['July 4'] },
  { id: 128, category: 'National Holidays', question: 'Name one national U.S. holiday.', answers: ['New Year\'s Day', 'Martin Luther King Jr. Day', 'Presidents\' Day', 'Memorial Day', 'Independence Day', 'Labor Day', 'Columbus Day', 'Veterans Day', 'Thanksgiving', 'Christmas'] },
];
