export default {
  topStories: [
    18570598,
    18572609,
    18573308,
    18574284,
    18571998,
    18571029,
    18570804,
    18569961,
    18558674,
  ],
  stories: {
    18570598: {
      by: 'adamwathan',
      descendants: 113,
      id: 18570598,
      kids: [
        18571041,
        18571487,
        18571023,
        18571623,
        18571262,
        18570909,
        18574779,
        18571013,
        18570978,
        18574937,
        18571319,
        18570794,
        18571739,
        18571987,
        18572477,
        18570927,
        18571006,
        18572161,
        18572731,
      ],
      score: 316,
      time: 1543598319,
      title: 'Spectrum is joining GitHub',
      type: 'story',
      url:
        'https://spectrum.chat/spectrum/general/spectrum-is-joining-github~1d3eb8ee-4c99-46c0-8daf-ca35a96be6ce',
    },
    18572609: {
      by: 'robin_reala',
      descendants: 25,
      id: 18572609,
      kids: [
        18573754,
        18574927,
        18573300,
        18574949,
        18573401,
        18574033,
        18573054,
        18573713,
      ],
      score: 123,
      time: 1543611915,
      title: 'Maximizing password manager attack surface',
      type: 'story',
      url:
        'https://palant.de/2018/11/30/maximizing-password-manager-attack-surface-leaning-from-kaspersky',
    },
    18573308: {
      by: 'trequartista',
      descendants: 12,
      id: 18573308,
      kids: [18575181, 18574984, 18574940, 18573649, 18574919, 18574993],
      score: 114,
      time: 1543616774,
      title: 'Why is 2 * (i * i) faster than 2 * i * i in Java?',
      type: 'story',
      url:
        'https://stackoverflow.com/questions/53452713/why-is-2-i-i-faster-than-2-i-i-in-java',
    },
  },
  kids: {
    18575181: {
      by: 'userbinator',
      id: 18575181,
      kids: [18575282],
      parent: 18573308,
      text:
        '<i>So it&#x27;s an issue of the optimizer; as is often the case, it unrolls too aggressively and shoots itself in the foot, all the while missing out on various other opportunities.</i><p>In my experience, loop unrolling should basically never be done except in extremely degenerate cases; I remember not long ago someone I know who also optimises Asm remarking &quot;it should&#x27;ve died along with the RISC fad&quot;. The original goal was to reduce per-iteration overhead associated with checking for end-of-loop, but any superscalar&#x2F;OoO&#x2F;speculative processor can &quot;execute past&quot; those instructions anyway; all that unrolling will do is bloat the code and work against caching. Memory bandwidth is often the bottleneck, not the core.',
      time: 1543638811,
      type: 'comment',
    },
    18574984: {
      by: 'jepler',
      id: 18574984,
      kids: [18575132],
      parent: 18573308,
      text:
        'You should translate your program to C++ and build with clang ; it turns the loop into a single constant load.  <a href="https:&#x2F;&#x2F;godbolt.org&#x2F;z&#x2F;slznbU" rel="nofollow">https:&#x2F;&#x2F;godbolt.org&#x2F;z&#x2F;slznbU</a>',
      time: 1543635917,
      type: 'comment',
    },
    18574940: {
      by: 'ww520',
      id: 18574940,
      kids: [18574985, 18574991],
      parent: 18573308,
      text: 'I&#x27;m surprised it&#x27;s not doing a left shift for the x2.',
      time: 1543635340,
      type: 'comment',
    },
    18573649: {
      by: 'techopoly',
      id: 18573649,
      kids: [18575091],
      parent: 18573308,
      text:
        'That just might be the most dedicated answer I&#x27;ve ever seen on Stack Overflow.',
      time: 1543619924,
      type: 'comment',
    },
    18574919: {
      by: 'crb002',
      id: 18574919,
      parent: 18573308,
      text: 'TIL about printing ASM from debug JVMs.',
      time: 1543635006,
      type: 'comment',
    },
    18574993: {
      by: 'microcolonel',
      dead: true,
      id: 18574993,
      parent: 18573308,
      text:
        'I guess they do not use value numbering, which is typically how you get equivalent results for cases like this.',
      time: 1543636023,
      type: 'comment',
    },
  },
};