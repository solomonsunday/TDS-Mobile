/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import Header from '@components/header';
import {Paragraph} from '@components/text/text';
import {
  BaseView,
  BottomViewContainer,
  Spacer,
  ViewContainer,
} from '@components/view';
import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {ServiceType} from './components/serviceType';
import {AppTextInput} from '@components/TextInput';
import SearchIcon from '@assets/svgs/search.svg';
import colors from '@utility/colors';
import {clothes} from '../../data';
import {ClotheItem} from './components/ClotheItem';
import {AppButton} from '@components/button';
import {NAIRA} from '@utility/naira';

const PriceList = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedService, setSelectedService] = useState(serviceTypes[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const HeaderComponent = () => {
    return (
      <View style={{marginBottom: 30}}>
        <View>
          <Paragraph>Kindly select one of these.</Paragraph>
          <Spacer height={15} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {serviceTypes.map(op => (
              <ServiceType
                isSelected={op.id === selectedService}
                label={op.label}
                key={op.id}
                onSelect={() => setSelectedService(op.id)}
              />
            ))}
          </ScrollView>
          <Spacer />
          <AppTextInput
            value={searchTerm}
            onChangeText={setSearchTerm}
            leftIcon={<SearchIcon />}
            placeholder="Search clothe items"
          />
          <Spacer />
        </View>
        <View style={styles.optionView}>
          {options.map(lb => (
            <Pressable
              onPress={() => setSelectedOption(lb)}
              style={[
                styles.option,
                {
                  borderBottomColor:
                    lb === selectedOption ? colors.primary : colors.border,
                },
              ]}
              key={lb}>
              <Paragraph textAlign="center">{lb}</Paragraph>
            </Pressable>
          ))}
        </View>
      </View>
    );
  };

  return (
    <BaseView>
      <Header title="Price list" />

      <ViewContainer style={{flex: 1}}>
        <Spacer />
        <FlatList
          ListHeaderComponent={() => <HeaderComponent />}
          data={clothes}
          renderItem={({item}) => <ClotheItem item={item} />}
        />
      </ViewContainer>
      <BottomViewContainer>
        <AppButton variant="primary" text="Proceed To Basket" />
      </BottomViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default PriceList;

const serviceTypes = [
  {
    label: 'Wash and Fold',
    id: 'wf',
  },
  {
    label: 'Iron and Fold',
    id: 'if',
  },
  {
    label: 'Wash, Iron and Fold',
    id: 'wif',
  },
];

const options = ['Male/Female', 'Kids', 'Household'];
