"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeHash = void 0;
const MiB = 1048576;
/**
 * A Hash that will calculate a Sha256 tree hash.
 */
class TreeHash {
    /**
     * Initializes a TreeHash.
     * @param Sha256 A Sha256 hash constructor.
     */
    constructor(Sha256, fromUtf8) {
        this.Sha256 = Sha256;
        this.fromUtf8 = fromUtf8;
        this.collectedHashDigests = [];
    }
    /**
     * Generates Sha256 hashes from 1 MiB chunks of the
     * internal buffer.
     * Will set the internal buffer to any bytes remaining
     * that is less than 1 MiB.
     */
    hashBuffer() {
        if (!this.buffer) {
            return;
        }
        let remainingSize = this.buffer.byteLength;
        while (remainingSize >= MiB) {
            const hash = new this.Sha256();
            hash.update(this.buffer.subarray(0, MiB));
            this.collectedHashDigests.push(hash.digest());
            this.buffer = this.buffer.subarray(MiB);
            remainingSize = this.buffer.byteLength;
        }
    }
    /**
     * Updates the tree hash with byte data.
     * @param chunk Byte data to apply to the tree hash.
     */
    update(data) {
        const chunk = this.convertToBuffer(data);
        if (!this.buffer) {
            this.buffer = chunk;
        }
        else {
            // determine size of both pieces
            const totalSize = this.buffer.byteLength + chunk.byteLength;
            const tempBuffer = new Uint8Array(totalSize);
            tempBuffer.set(this.buffer);
            tempBuffer.set(chunk, this.buffer.byteLength);
            this.buffer = tempBuffer;
        }
        // hasBuffer will set this.buffer with remaining data
        this.hashBuffer();
    }
    /**
     * Calculates the digest for the tree hash.
     */
    async digest() {
        let collectedHashDigests = this.collectedHashDigests;
        // remove the reference to collected hashes to free up space
        this.collectedHashDigests = [];
        // loop through collected hashes
        if (this.buffer && this.buffer.byteLength > 0) {
            const smallHash = new this.Sha256();
            smallHash.update(this.buffer);
            collectedHashDigests.push(smallHash.digest());
            // remove the remaining buffer
            this.buffer = void 0;
        }
        while (collectedHashDigests.length > 1) {
            const higherLevelHashDigests = [];
            for (let i = 0; i < collectedHashDigests.length; i += 2) {
                if (i + 1 < collectedHashDigests.length) {
                    // concatenate the pair of hashes
                    const [digest1, digest2] = await Promise.all([collectedHashDigests[i], collectedHashDigests[i + 1]]);
                    const chunk = new Uint8Array(digest1.byteLength + digest2.byteLength);
                    chunk.set(digest1);
                    chunk.set(digest2, digest1.byteLength);
                    const hash = new this.Sha256();
                    hash.update(chunk);
                    higherLevelHashDigests.push(hash.digest());
                }
                else {
                    // move a lone hash up a level
                    higherLevelHashDigests.push(collectedHashDigests[i]);
                }
            }
            collectedHashDigests = higherLevelHashDigests;
        }
        return collectedHashDigests[0];
    }
    /**
     * Converts source data into a Uint8Array.
     * @param data Data to convert to a Uint8Array.
     */
    convertToBuffer(data) {
        if (typeof data === "string") {
            return this.fromUtf8(data);
        }
        if (ArrayBuffer.isView(data)) {
            return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
    }
}
exports.TreeHash = TreeHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO0FBRXBCOztHQUVHO0FBQ0gsTUFBYSxRQUFRO0lBSW5COzs7T0FHRztJQUNILFlBQTZCLE1BQXVCLEVBQW1CLFFBQWlCO1FBQTNELFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQW1CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFOaEYseUJBQW9CLEdBQTBCLEVBQUUsQ0FBQztJQU1rQyxDQUFDO0lBRTVGOzs7OztPQUtHO0lBQ0ssVUFBVTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxPQUFPLGFBQWEsSUFBSSxHQUFHLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxJQUFnQjtRQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxnQ0FBZ0M7WUFDaEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUM1RCxNQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU3QyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1NBQzFCO1FBRUQscURBQXFEO1FBQ3JELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsTUFBTTtRQUNqQixJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyRCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUUvQixnQ0FBZ0M7UUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUM3QyxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDOUMsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFFRCxPQUFPLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEMsTUFBTSxzQkFBc0IsR0FBMEIsRUFBRSxDQUFDO1lBQ3pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtvQkFDdkMsaUNBQWlDO29CQUNqQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXJHLE1BQU0sS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0RSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXZDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7aUJBQzVDO3FCQUFNO29CQUNMLDhCQUE4QjtvQkFDOUIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3REO2FBQ0Y7WUFDRCxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztTQUMvQztRQUVELE9BQU8sb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGVBQWUsQ0FBQyxJQUFnQjtRQUN0QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRztRQUVELE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBL0dELDRCQStHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY29kZXIsIEhhc2gsIEhhc2hDb25zdHJ1Y3RvciwgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5jb25zdCBNaUIgPSAxMDQ4NTc2O1xuXG4vKipcbiAqIEEgSGFzaCB0aGF0IHdpbGwgY2FsY3VsYXRlIGEgU2hhMjU2IHRyZWUgaGFzaC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRyZWVIYXNoIGltcGxlbWVudHMgSGFzaCB7XG4gIHByaXZhdGUgYnVmZmVyPzogVWludDhBcnJheTtcbiAgcHJpdmF0ZSBjb2xsZWN0ZWRIYXNoRGlnZXN0czogUHJvbWlzZTxVaW50OEFycmF5PltdID0gW107XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgVHJlZUhhc2guXG4gICAqIEBwYXJhbSBTaGEyNTYgQSBTaGEyNTYgaGFzaCBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgU2hhMjU2OiBIYXNoQ29uc3RydWN0b3IsIHByaXZhdGUgcmVhZG9ubHkgZnJvbVV0Zjg6IERlY29kZXIpIHt9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBTaGEyNTYgaGFzaGVzIGZyb20gMSBNaUIgY2h1bmtzIG9mIHRoZVxuICAgKiBpbnRlcm5hbCBidWZmZXIuXG4gICAqIFdpbGwgc2V0IHRoZSBpbnRlcm5hbCBidWZmZXIgdG8gYW55IGJ5dGVzIHJlbWFpbmluZ1xuICAgKiB0aGF0IGlzIGxlc3MgdGhhbiAxIE1pQi5cbiAgICovXG4gIHByaXZhdGUgaGFzaEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuYnVmZmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlbWFpbmluZ1NpemUgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgIHdoaWxlIChyZW1haW5pbmdTaXplID49IE1pQikge1xuICAgICAgY29uc3QgaGFzaCA9IG5ldyB0aGlzLlNoYTI1NigpO1xuICAgICAgaGFzaC51cGRhdGUodGhpcy5idWZmZXIuc3ViYXJyYXkoMCwgTWlCKSk7XG4gICAgICB0aGlzLmNvbGxlY3RlZEhhc2hEaWdlc3RzLnB1c2goaGFzaC5kaWdlc3QoKSk7XG5cbiAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuc3ViYXJyYXkoTWlCKTtcbiAgICAgIHJlbWFpbmluZ1NpemUgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB0cmVlIGhhc2ggd2l0aCBieXRlIGRhdGEuXG4gICAqIEBwYXJhbSBjaHVuayBCeXRlIGRhdGEgdG8gYXBwbHkgdG8gdGhlIHRyZWUgaGFzaC5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZGF0YTogU291cmNlRGF0YSkge1xuICAgIGNvbnN0IGNodW5rID0gdGhpcy5jb252ZXJ0VG9CdWZmZXIoZGF0YSk7XG4gICAgaWYgKCF0aGlzLmJ1ZmZlcikge1xuICAgICAgdGhpcy5idWZmZXIgPSBjaHVuaztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGV0ZXJtaW5lIHNpemUgb2YgYm90aCBwaWVjZXNcbiAgICAgIGNvbnN0IHRvdGFsU2l6ZSA9IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGggKyBjaHVuay5ieXRlTGVuZ3RoO1xuICAgICAgY29uc3QgdGVtcEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHRvdGFsU2l6ZSk7XG5cbiAgICAgIHRlbXBCdWZmZXIuc2V0KHRoaXMuYnVmZmVyKTtcbiAgICAgIHRlbXBCdWZmZXIuc2V0KGNodW5rLCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgIHRoaXMuYnVmZmVyID0gdGVtcEJ1ZmZlcjtcbiAgICB9XG5cbiAgICAvLyBoYXNCdWZmZXIgd2lsbCBzZXQgdGhpcy5idWZmZXIgd2l0aCByZW1haW5pbmcgZGF0YVxuICAgIHRoaXMuaGFzaEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpZ2VzdCBmb3IgdGhlIHRyZWUgaGFzaC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkaWdlc3QoKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG4gICAgbGV0IGNvbGxlY3RlZEhhc2hEaWdlc3RzID0gdGhpcy5jb2xsZWN0ZWRIYXNoRGlnZXN0cztcbiAgICAvLyByZW1vdmUgdGhlIHJlZmVyZW5jZSB0byBjb2xsZWN0ZWQgaGFzaGVzIHRvIGZyZWUgdXAgc3BhY2VcbiAgICB0aGlzLmNvbGxlY3RlZEhhc2hEaWdlc3RzID0gW107XG5cbiAgICAvLyBsb29wIHRocm91Z2ggY29sbGVjdGVkIGhhc2hlc1xuICAgIGlmICh0aGlzLmJ1ZmZlciAmJiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc21hbGxIYXNoID0gbmV3IHRoaXMuU2hhMjU2KCk7XG4gICAgICBzbWFsbEhhc2gudXBkYXRlKHRoaXMuYnVmZmVyKTtcbiAgICAgIGNvbGxlY3RlZEhhc2hEaWdlc3RzLnB1c2goc21hbGxIYXNoLmRpZ2VzdCgpKTtcbiAgICAgIC8vIHJlbW92ZSB0aGUgcmVtYWluaW5nIGJ1ZmZlclxuICAgICAgdGhpcy5idWZmZXIgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNvbGxlY3RlZEhhc2hEaWdlc3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGhpZ2hlckxldmVsSGFzaERpZ2VzdHM6IFByb21pc2U8VWludDhBcnJheT5bXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsZWN0ZWRIYXNoRGlnZXN0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBpZiAoaSArIDEgPCBjb2xsZWN0ZWRIYXNoRGlnZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBjb25jYXRlbmF0ZSB0aGUgcGFpciBvZiBoYXNoZXNcbiAgICAgICAgICBjb25zdCBbZGlnZXN0MSwgZGlnZXN0Ml0gPSBhd2FpdCBQcm9taXNlLmFsbChbY29sbGVjdGVkSGFzaERpZ2VzdHNbaV0sIGNvbGxlY3RlZEhhc2hEaWdlc3RzW2kgKyAxXV0pO1xuXG4gICAgICAgICAgY29uc3QgY2h1bmsgPSBuZXcgVWludDhBcnJheShkaWdlc3QxLmJ5dGVMZW5ndGggKyBkaWdlc3QyLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgIGNodW5rLnNldChkaWdlc3QxKTtcbiAgICAgICAgICBjaHVuay5zZXQoZGlnZXN0MiwgZGlnZXN0MS5ieXRlTGVuZ3RoKTtcblxuICAgICAgICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5TaGEyNTYoKTtcbiAgICAgICAgICBoYXNoLnVwZGF0ZShjaHVuayk7XG4gICAgICAgICAgaGlnaGVyTGV2ZWxIYXNoRGlnZXN0cy5wdXNoKGhhc2guZGlnZXN0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG1vdmUgYSBsb25lIGhhc2ggdXAgYSBsZXZlbFxuICAgICAgICAgIGhpZ2hlckxldmVsSGFzaERpZ2VzdHMucHVzaChjb2xsZWN0ZWRIYXNoRGlnZXN0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbGxlY3RlZEhhc2hEaWdlc3RzID0gaGlnaGVyTGV2ZWxIYXNoRGlnZXN0cztcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGVkSGFzaERpZ2VzdHNbMF07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgc291cmNlIGRhdGEgaW50byBhIFVpbnQ4QXJyYXkuXG4gICAqIEBwYXJhbSBkYXRhIERhdGEgdG8gY29udmVydCB0byBhIFVpbnQ4QXJyYXkuXG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnRUb0J1ZmZlcihkYXRhOiBTb3VyY2VEYXRhKTogVWludDhBcnJheSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdGhpcy5mcm9tVXRmOChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB9XG59XG4iXX0=