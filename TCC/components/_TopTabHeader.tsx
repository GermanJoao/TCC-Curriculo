import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const TopTabHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'index', label: 'Início' },
    { name: 'Curso', label: 'Cursos' },
    { name: 'dicas', label: 'Dicas' },
    { name: 'ajustes', label: 'Ajustes' },
  ];

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
      {tabs.map((tab, i) => {
        const focused = route.name === tab.name;
        return (
          <Pressable
            key={i}
            onPress={() => navigation.navigate(tab.name as never)}
            style={{ marginHorizontal: 12 }}
          >
            <Text style={{
              color: focused ? '#FFD700' : '#AAA',
              fontWeight: focused ? 'bold' : 'normal',
              fontSize: 18,
            }}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TopTabHeader;
