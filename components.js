import {
  Text,
  View,
  Button,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is this?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "When is this?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Where is this?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const config = {
  animate: true,
  arrowIcon: "V",
  expandIcon: "+",
  collapseIcon: "-",
};

export default function Home() {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
            marginBottom: 10,
            color: "green",
          }}
        >
          Loren Ipsum
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          purus in justo bibendum cursus. Cras in vehicula ipsum, nec lacinia
          magna. Proin volutpat interdum facilisis. Vestibulum ornare lorem a
          sodales dapibus. Pellentesque sed nunc suscipit, rhoncus ipsum eget,
          faucibus sem. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Duis id laoreet tortor, eu
          mollis lacus. Mauris efficitur nibh nec tellus dignissim ornare. Ut et
          sapien odio.
        </Text>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.logo} source={require("./assets/icon.png")} />
        </View>
      </View>
      <View
        style={{
          margin: 10,
        }}
      >
        <Faq data={data} styles={styles.dropdown} config={config} />
      </View>
    </ScrollView>
  );
}

export function About() {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={styles.sep}>
        <View style={styles.leftt}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={styles.rightt}>
          <Image style={styles.logo2} source={require("./assets/icon.png")} />
        </View>
      </View>
      <View style={styles.sep}>
        <View style={styles.rightt}>
          <Image style={styles.logo2} source={require("./assets/icon.png")} />
        </View>
        <View style={styles.leftt}>
          <Text style={styles.paragraph}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Contact() {
  return (
    <View>
      <Text>Hi 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#dcf7d7",
    padding: 8,
    marginLeft: 20,
    marginRight: 20,
    shadowRadius: 2,
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 15,
    textAlign: "justify",
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 5,
    marginBottom: 10,
  },
  dropdown: {
    rowTitleColor: "green",
    transitionDuration: "0.4s",
  },
  sep: {
    flex: 1,
    flexDirection: "row",
  },
  leftt: {
    flex: 1.2,
    justifyContent: "center",
  },
  rightt: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  logo2: {
    height: 150,
    width: 150,
  },
});
