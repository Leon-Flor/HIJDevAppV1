/**
 * @format
 */

import { AppRegistry, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { name as appName } from './app.json';
import { App } from '@/App';


const Application = () => {
    return (
        <SafeAreaView style={styles.main}>
            <App />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
})

AppRegistry.registerComponent(appName, () => Application);
