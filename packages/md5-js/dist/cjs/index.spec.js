"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_base64_node_1 = require("@aws-sdk/util-base64-node");
const util_hex_encoding_1 = require("@aws-sdk/util-hex-encoding");
const _1 = require("./");
const hashVectors = require("hash-test-vectors");
describe("Md5", () => {
    let idx = 0;
    for (const { input, ...results } of hashVectors) {
        const expected = results["md5"];
        it(`should calculate a MD5 hash of ${expected} for test vector ${++idx}`, async () => {
            const hash = new _1.Md5();
            hash.update(util_base64_node_1.fromBase64(input));
            expect(util_hex_encoding_1.toHex(await hash.digest())).toBe(expected);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQXVEO0FBQ3ZELGtFQUFtRDtBQUVuRCx5QkFBeUI7QUFDekIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFakQsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBSyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFO1FBQy9DLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsa0NBQWtDLFFBQVEsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDbkYsTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMseUJBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21CYXNlNjQgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1iYXNlNjQtbm9kZVwiO1xuaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcblxuaW1wb3J0IHsgTWQ1IH0gZnJvbSBcIi4vXCI7XG5jb25zdCBoYXNoVmVjdG9ycyA9IHJlcXVpcmUoXCJoYXNoLXRlc3QtdmVjdG9yc1wiKTtcblxuZGVzY3JpYmUoXCJNZDVcIiwgKCkgPT4ge1xuICBsZXQgaWR4ID0gMDtcbiAgZm9yIChjb25zdCB7IGlucHV0LCAuLi5yZXN1bHRzIH0gb2YgaGFzaFZlY3RvcnMpIHtcbiAgICBjb25zdCBleHBlY3RlZCA9IHJlc3VsdHNbXCJtZDVcIl07XG4gICAgaXQoYHNob3VsZCBjYWxjdWxhdGUgYSBNRDUgaGFzaCBvZiAke2V4cGVjdGVkfSBmb3IgdGVzdCB2ZWN0b3IgJHsrK2lkeH1gLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBoYXNoID0gbmV3IE1kNSgpO1xuICAgICAgaGFzaC51cGRhdGUoZnJvbUJhc2U2NChpbnB1dCkpO1xuICAgICAgZXhwZWN0KHRvSGV4KGF3YWl0IGhhc2guZGlnZXN0KCkpKS50b0JlKGV4cGVjdGVkKTtcbiAgICB9KTtcbiAgfVxufSk7XG4iXX0=