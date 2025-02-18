import React from 'react';
import { Award } from 'lucide-react';

const awsBadges = [
  { name: "AWS Certified Developer", image: "https://images.credly.com/size/160x160/images/9358115e-ead7-47c2-91e2-165b6a650a1b/image.png" },
  { name: "AWS Certified Solutions Architect", image: "https://images.credly.com/images/979e42e2-1d32-4d21-97ea-53d991ea50fb/image.png" },
  { name: "AWS Certified SysOps Administrator", image: "https://images.credly.com/images/629a2bb9-14a6-47b3-b17e-f1056b1404d0/image.png" },
  { name: "AWS Certified Cloud Practitioner", image: "https://images.credly.com/size/160x160/images/5bf37709-4b69-4cdc-9edc-af7b3370d427/image.png" }
];

const leetCodeBadges = [
  { name: "LeetCode 2024 50 Badge", image: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif" },
  { name: "LeetCode Top SQL 50 Badge", image: "https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif" }
];

const HackerrankBadges = [
  { name: "Hackerrank SQl Badge", image: "https://media-hosting.imagekit.io//4a6abe08a60441f6/screenshot_1739874932674.png?Expires=1834482936&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VNs66oZRsQLCXuNc-RKOfs5qBQ2oTJGS3C4p6nkfhk80Fsdlfs3SddHpH1LcjQ34bBg-yhN3VtzyXO8MrSM9UPQmvLAzZBxJIShyw3hxfEiMMJRI4cjHUb0-xnJoQ~8xs1OAdqzHC5lEZ3RksQ3fvtuiJddjUu4pN9-h3MuNjCC76nbKTsPcgRZMZI7IrBXuejtJbeEimlG7EkGXjnIO3Qv55SYPzyut7jW~iMuMRILc2b0TygMHb9EEza81NtpJ7eZaLVJEKP0JrpKKPIGrHleEN~AKKXZAUXbuAXP-0Smea-WFYqg1UJdBhHYZy1~JApFJDDMvEZOGBW0Iy3rNTQ__" },
];

const linuxBadges = [
  { name: "Linux Lab", image: "https://images.credly.com/size/160x160/images/c6d2f560-62c8-4b89-a825-aa982fdafed7/blob" }
];

export function Badges() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">AWS Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awsBadges.map((badge, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <img src={badge.image} alt={badge.name} className="h-20 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">{badge.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">LeetCode Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leetCodeBadges.map((badge, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <img src={badge.image} alt={badge.name} className="h-20 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">{badge.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">HackerRank Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HackerrankBadges.map((badge, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <img src={badge.image} alt={badge.name} className="h-20 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">{badge.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Linux Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {linuxBadges.map((badge, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <img src={badge.image} alt={badge.name} className="h-20 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">{badge.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}