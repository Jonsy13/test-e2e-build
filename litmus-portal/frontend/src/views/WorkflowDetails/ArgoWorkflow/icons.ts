import { getNode } from '../../../utils/createSVGNode';

const getIcon = (iconType: string): SVGElement => {
  const icon = getNode('g');

  switch (iconType) {
    case 'pending': {
      // Pending Icon
      const path1 = getNode('path', {
        d: 'M5 0.570801C2.24305 0.570801 0 2.81385 0 5.5708C0 8.32775 2.24305 10.5708 5 10.5708C7.75695 10.5708 10 8.32775 10 5.5708C10 2.81385 7.75695 0.570801 5 0.570801ZM5 9.9458C2.58758 9.9458 0.625003 7.98322 0.625003 5.5708C0.625003 3.15838 2.58758 1.1958 5 1.1958C7.41242 1.1958 9.375 3.15838 9.375 5.5708C9.375 7.98322 7.41242 9.9458 5 9.9458Z',
        class: 'pendingIcon',
      });
      const path2 = getNode('path', {
        d: 'M5.3125 2.4458H4.6875V5.70019L6.65405 7.66674L7.09594 7.22484L5.3125 5.4414V2.4458Z',
        class: 'pendingIcon',
      });
      icon.appendChild(path1);
      icon.appendChild(path2);
      break;
    }
    case 'running': {
      const path = getNode('path', {
        d: 'M6.00059 12.5708C5.19074 12.5708 4.40434 12.4126 3.66481 12.0997C2.9499 11.7974 2.30882 11.3638 1.75798 10.813C1.20715 10.2622 0.773513 9.62119 0.47114 8.90635C0.158219 8.16689 0 7.38057 0 6.5708C0 6.3376 0.18869 6.14893 0.421916 6.14893C0.655142 6.14893 0.843832 6.3376 0.843832 6.5708C0.843832 7.26689 0.979783 7.94189 1.24934 8.57822C1.50952 9.19228 1.88104 9.74424 2.35453 10.2177C2.82801 10.6911 3.38002 11.0638 3.99414 11.3228C4.62936 11.5911 5.30442 11.7271 6.00059 11.7271C6.69675 11.7271 7.37181 11.5911 8.0082 11.3216C8.62233 11.0614 9.17433 10.6899 9.64782 10.2165C10.1213 9.74307 10.494 9.19111 10.753 8.57705C11.0214 7.9419 11.1573 7.26689 11.1573 6.5708C11.1573 5.87471 11.0214 5.19971 10.7518 4.56338C10.4925 3.95079 10.1173 3.3941 9.64664 2.92393C9.17695 2.45273 8.62007 2.0774 8.00703 1.81885C7.37181 1.55049 6.69675 1.41455 6.00059 1.41455C5.76736 1.41455 5.57867 1.22588 5.57867 0.992676C5.57867 0.759473 5.76736 0.570801 6.00059 0.570801C6.81043 0.570801 7.59684 0.729004 8.33636 1.04189C9.05127 1.34424 9.69235 1.77783 10.2432 2.32861C10.794 2.87939 11.2265 3.52158 11.5289 4.23525C11.8418 4.97471 12 5.76103 12 6.5708C12 7.38057 11.8418 8.16689 11.5289 8.90635C11.2277 9.62119 10.794 10.2622 10.2432 10.813C9.69235 11.3638 9.0501 11.7962 8.33636 12.0985C7.59684 12.4126 6.81043 12.5708 6.00059 12.5708Z',
        class: 'runningIcon',
      });
      icon.appendChild(path);
      break;
    }
    case 'succeeded': {
      const path = getNode('path', {
        d: 'M3.82918 7.64456C3.73372 7.74058 3.60349 7.79415 3.46821 7.79415C3.33292 7.79415 3.20269 7.74058 3.10723 7.64456L0.224382 4.76124C-0.0747942 4.46207 -0.0747942 3.97693 0.224382 3.67832L0.585358 3.31725C0.884628 3.01807 1.3692 3.01807 1.66838 3.31725L3.46821 5.11717L8.3316 0.253679C8.63087 -0.0454973 9.11591 -0.0454973 9.41462 0.253679L9.7756 0.614748C10.0748 0.913925 10.0748 1.39897 9.7756 1.69767L3.82918 7.64456Z',
        class: 'succeededIcon',
      });
      icon.appendChild(path);
      break;
    }
    case 'failed': {
      const path = getNode('path', {
        d: 'M6.64999 5.57111L9.74362 2.47748C10.0854 2.13567 10.0854 1.5815 9.74362 1.24022L9.3312 0.827802C8.98928 0.485881 8.43511 0.485881 8.09383 0.827802L5.00031 3.92133L1.90668 0.827161C1.56487 0.485347 1.0107 0.485347 0.669421 0.827161L0.25636 1.23958C-0.0854535 1.5815 -0.0854535 2.13567 0.25636 2.47695L3.35052 5.57111L0.257001 8.66463C-0.0849194 9.00656 -0.0849194 9.56072 0.257001 9.902L0.669421 10.3144C1.01124 10.6562 1.5654 10.6562 1.90668 10.3144L5.00031 7.22079L8.09383 10.3144C8.43575 10.6562 8.98992 10.6562 9.3312 10.3144L9.74362 9.902C10.0854 9.56008 10.0854 9.00591 9.74362 8.66463L6.64999 5.57111Z',
        class: 'failedIcon',
      });
      icon.appendChild(path);
      break;
    }
    case 'skipped': {
      const path1 = getNode('path', {
        d: 'M5.02344 10.1368L7.98398 8.16315L5.02344 6.18945V10.1368Z',
        class: 'skippedIcon',
      });
      const path2 = getNode('path', {
        d: 'M8.9707 10.1368L11.9312 8.16315L8.9707 6.18945V10.1368Z',
        class: 'skippedIcon',
      });
      icon.appendChild(path1);
      icon.appendChild(path2);
      break;
    }
    case 'omitted': {
      const path = getNode('path', {
        d: 'M7.06452 12.5384V12.5412V12.5377C7.06406 12.3973 7.0079 12.2629 6.90839 12.1639C6.80888 12.0649 6.67415 12.0094 6.53377 12.0096C6.3934 12.0098 6.25885 12.0658 6.15967 12.1651C6.06049 12.2645 6.00478 12.3991 6.00478 12.5395C6.00478 12.6799 6.06049 12.8145 6.15967 12.9138C6.25885 13.0132 6.3934 13.0691 6.53377 13.0694C6.67415 13.0696 6.80888 13.0141 6.90839 12.9151C7.0079 12.8161 7.06406 12.6816 7.06452 12.5412V12.5384ZM7.38245 11.1961C7.6868 11.388 7.91705 11.6774 8.03556 12.0171C8.15408 12.3568 8.15385 12.7267 8.03491 13.0663C7.91597 13.4058 7.68535 13.695 7.38076 13.8865C7.07617 14.078 6.71563 14.1605 6.35807 14.1205C6.0005 14.0806 5.66708 13.9205 5.4123 13.6664C5.15752 13.4124 4.99645 13.0794 4.95543 12.722C4.91441 12.3646 4.99586 12.0038 5.18648 11.6986C5.37708 11.3935 5.66558 11.162 6.00478 11.0421V7.32874C5.65105 7.20376 5.3529 6.95769 5.16303 6.63412C4.97316 6.31055 4.90381 5.93024 4.96722 5.56046C5.03063 5.19075 5.22273 4.85524 5.50956 4.61348C5.79639 4.37165 6.15949 4.23897 6.53465 4.23897C6.90982 4.23897 7.27291 4.37165 7.55974 4.61348C7.84658 4.85524 8.03867 5.19075 8.10209 5.56046C8.1655 5.93024 8.09614 6.31055 7.90627 6.63412C7.7164 6.95769 7.41826 7.20376 7.06452 7.32874V9.805C7.44481 9.38674 7.90841 9.05267 8.42552 8.82429C8.94264 8.59591 9.50182 8.47826 10.0671 8.47891H11.0407C11.1656 8.12518 11.4117 7.82703 11.7353 7.63713C12.0589 7.44729 12.4392 7.37792 12.8089 7.44136C13.1787 7.50473 13.5142 7.6969 13.7559 7.98369C13.9978 8.27053 14.1304 8.63362 14.1304 9.00878C14.1304 9.38395 13.9978 9.74705 13.7559 10.0339C13.5142 10.3207 13.1787 10.5128 12.8089 10.5762C12.4392 10.6396 12.0589 10.5703 11.7353 10.3804C11.4117 10.1905 11.1656 9.89239 11.0407 9.53865H10.0671C9.50991 9.53861 8.96367 9.69362 8.48953 9.98633C8.01541 10.279 7.63208 10.6979 7.38245 11.1961ZM12.5398 8.47891C12.6804 8.47891 12.8152 8.53474 12.9145 8.63411C13.0139 8.73348 13.0697 8.86826 13.0697 9.00878C13.0697 9.14931 13.0139 9.28409 12.9145 9.38346C12.8152 9.48283 12.6804 9.53865 12.5398 9.53865C12.3993 9.53865 12.2645 9.48283 12.1652 9.38346C12.0658 9.28409 12.01 9.14931 12.01 9.00878C12.01 8.86826 12.0658 8.73348 12.1652 8.63411C12.2645 8.53474 12.3993 8.47891 12.5398 8.47891ZM6.53465 5.2997C6.67518 5.2997 6.80996 5.35551 6.90933 5.45491C7.0087 5.55425 7.06452 5.68904 7.06452 5.82957C7.06452 5.97009 7.0087 6.10489 6.90933 6.20422C6.80996 6.30362 6.67518 6.35944 6.53465 6.35944C6.39413 6.35944 6.25935 6.30362 6.15998 6.20422C6.06061 6.10489 6.00478 5.97009 6.00478 5.82957C6.00478 5.68904 6.06061 5.55425 6.15998 5.45491C6.25935 5.35551 6.39413 5.2997 6.53465 5.2997Z',
        class: 'omittedIcon',
      });
      icon.appendChild(path);
      break;
    }
    case 'error': {
      const path = getNode('path', {
        d: 'M12.7054 10.5948L8.89909 4.01788C8.80777 3.86037 8.67667 3.72962 8.51892 3.63873C8.36117 3.54784 8.1823 3.5 8.00023 3.5C7.81817 3.5 7.6393 3.54784 7.48155 3.63873C7.3238 3.72962 7.1927 3.86037 7.10138 4.01788V4.01822L3.29504 10.5948C3.20366 10.7526 3.15545 10.9317 3.15527 11.1141C3.1551 11.2965 3.20296 11.4757 3.29404 11.6337C3.38512 11.7917 3.51621 11.9229 3.67412 12.0142C3.83202 12.1054 4.01118 12.1535 4.19356 12.1535H11.8069C11.9893 12.1535 12.1684 12.1054 12.3264 12.0142C12.4843 11.9229 12.6153 11.7917 12.7064 11.6337C12.7975 11.4757 12.8454 11.2965 12.8452 11.1141C12.845 10.9317 12.7968 10.7526 12.7054 10.5948V10.5948ZM7.65374 6.96154C7.65374 6.86973 7.69021 6.78169 7.75513 6.71677C7.82005 6.65185 7.90809 6.61538 7.9999 6.61538C8.0917 6.61538 8.17975 6.65185 8.24466 6.71677C8.30958 6.78169 8.34605 6.86973 8.34605 6.96154V8.69231C8.34605 8.78411 8.30958 8.87216 8.24466 8.93708C8.17975 9.00199 8.0917 9.03846 7.9999 9.03846C7.90809 9.03846 7.82005 9.00199 7.75513 8.93708C7.69021 8.87216 7.65374 8.78411 7.65374 8.69231V6.96154ZM8.00015 10.7694C7.89746 10.7694 7.79707 10.7389 7.71168 10.6818C7.62629 10.6248 7.55974 10.5437 7.52044 10.4488C7.48114 10.3539 7.47086 10.2495 7.4909 10.1488C7.51093 10.0481 7.56038 9.95559 7.633 9.88297C7.70561 9.81036 7.79813 9.76091 7.89885 9.74087C7.99957 9.72084 8.10397 9.73112 8.19885 9.77042C8.29373 9.80972 8.37482 9.87627 8.43187 9.96166C8.48893 10.047 8.51938 10.1474 8.51938 10.2501C8.51937 10.3878 8.46467 10.5199 8.36729 10.6173C8.26992 10.7146 8.13786 10.7693 8.00015 10.7694V10.7694Z',
        class: 'errorIcon',
      });
      icon.appendChild(path);
      break;
    }
    default:
      break;
  }

  return icon;
};

export { getIcon };
