import Header from '@components/header';
import {Paragraph} from '@components/text/text';
import {BaseView, FlexedView, Spacer, ViewContainer} from '@components/view';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import question from '@assets/img/faq.png';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import colors from '@utility/colors';
import {useState} from 'react';
import ArrowUp from '@assets/svgs/arrow-up.svg';
import ArrowDown from '@assets/svgs/arrow-down.svg';

export const Faq = () => {
  const [selectedFaq, setSelectedFaq] = useState(1);

  const onSelectFaq = (id: number) => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {type: 'linear', property: 'opacity'},
      update: {type: 'linear', initialVelocity: 2},
    });
    if (selectedFaq === id) {
      setSelectedFaq(0);
    } else {
      setSelectedFaq(id);
    }
  };

  return (
    <BaseView>
      <Header title="FAQs" hasBorder={false} hasRightItems={false} />
      <ViewContainer style={styles.container}>
        <ScrollView contentContainerStyle={{paddingTop: 35}}>
          <FlexedView style={{flex: 1}} justifyContent="space-between">
            <View style={{flex: 2}}>
              <Paragraph fontSize={17} fontWeight="700">
                Why use The DryCleaner’s Son?
              </Paragraph>
              <Paragraph mt={5}>
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Paragraph>
            </View>

            <Image style={styles.img} source={question} resizeMode="contain" />
          </FlexedView>
          <Spacer height={45} />
          {faqs.map(fq => (
            <View style={styles.item}>
              <FlexedView>
                <View style={{flex: 1}}>
                  <Paragraph fontSize={16} fontWeight="500">
                    {fq.title}
                  </Paragraph>
                </View>
                <Pressable onPress={() => onSelectFaq(fq.id)}>
                  {selectedFaq === fq.id ? <ArrowUp /> : <ArrowDown />}
                </Pressable>
              </FlexedView>
              {selectedFaq === fq.id && (
                <View>
                  <Spacer />
                  <Paragraph fontSize={14}>{fq.desc}</Paragraph>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: heightPixel(150),
    width: heightPixel(150),
    flex: 1,
  },
  item: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border,
    padding: 15,
    // height: 50,
    overflow: 'hidden',
    marginBottom: 20,
  },
});

const faqs = [
  {
    id: 1,
    title: 'How long does it take to get my clothes drycleaned?',
    desc: 'How long does it take to get my clothes drycleaned?',
  },
  {
    id: 2,
    title: 'How long does it take to get my clothes drycleaned?',
    desc: 'How long does it take to get my clothes drycleaned?',
  },
  {
    id: 3,
    title: 'How long does it take to get my clothes drycleaned?',
    desc: 'How long does it take to get my clothes drycleaned?',
  },
  {
    id: 4,
    title: 'How long does it take to get my clothes drycleaned?',
    desc: 'How long does it take to get my clothes drycleaned?',
  },
];
