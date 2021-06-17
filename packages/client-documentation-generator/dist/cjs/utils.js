"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentClientDirectory = void 0;
const getCurrentClientDirectory = (event) => {
    const clientsDirectory = event.project.directory.directories["clients"].directories;
    return Object.values(clientsDirectory).filter((directory) => directory === null || directory === void 0 ? void 0 : directory.files.find((file) => file.name.endsWith("Client.ts")))[0];
};
exports.getCurrentClientDirectory = getCurrentClientDirectory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSx5QkFBeUIsR0FBRyxDQUFDLEtBQXFDLEVBQW1CLEVBQUU7SUFDbEcsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3BGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQzFELFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNqRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBTFcsUUFBQSx5QkFBeUIsNkJBS3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdFJlZmxlY3Rpb24sIFNvdXJjZURpcmVjdG9yeSB9IGZyb20gXCJ0eXBlZG9jL2Rpc3QvbGliL21vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudENsaWVudERpcmVjdG9yeSA9IChldmVudDogeyBwcm9qZWN0OiBQcm9qZWN0UmVmbGVjdGlvbiB9KTogU291cmNlRGlyZWN0b3J5ID0+IHtcbiAgY29uc3QgY2xpZW50c0RpcmVjdG9yeSA9IGV2ZW50LnByb2plY3QuZGlyZWN0b3J5LmRpcmVjdG9yaWVzW1wiY2xpZW50c1wiXS5kaXJlY3RvcmllcztcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY2xpZW50c0RpcmVjdG9yeSkuZmlsdGVyKChkaXJlY3RvcnkpID0+XG4gICAgZGlyZWN0b3J5Py5maWxlcy5maW5kKChmaWxlKSA9PiBmaWxlLm5hbWUuZW5kc1dpdGgoXCJDbGllbnQudHNcIikpXG4gIClbMF07XG59O1xuIl19