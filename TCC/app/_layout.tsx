import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#FFBB00', // amarelo
          borderRadius: 30,
          height: 70,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
          justifyContent: 'space-between',
        },
        tabBarIcon: ({ color, size, focused }) => {
            let iconName = 'home';
          
            switch (route.name) {
              case 'index':
                iconName = 'home';
                break;
              case 'Curso':
                iconName = 'school';
                break;
            case 'dicas':
                iconName = 'book';
                break;
            case 'ajustes':
                iconName = 'settings';
                break;
            }
          
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: focused ? '#fff' : '#FFD560',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,

                }}
              >
                <Ionicons name={iconName} size={24} color="#000" />
              </View>
            );
          }
          ,
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="Curso" options={{ title: 'Curso' }} />
      <Tabs.Screen name="dicas" options={{ title: 'dicas' }} />
      <Tabs.Screen name="ajustes" options={{ title: 'ajustes' }} />

    </Tabs>
  );
}
