import { decl } from 'bem-react-core';

export default decl({
    block: 'Post',
    elem: 'Content',
    mods({mods}) {
      return mods;
    }
});
