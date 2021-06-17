import { MediaStoreDataClient } from "./MediaStoreDataClient";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import { DescribeObjectCommandInput, DescribeObjectCommandOutput } from "./commands/DescribeObjectCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import { ListItemsCommandInput, ListItemsCommandOutput } from "./commands/ListItemsCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3
 *          service. Objects are the fundamental entities that are stored in AWS Elemental
 *          MediaStore.</p>
 */
export declare class MediaStoreData extends MediaStoreDataClient {
    /**
     * <p>Deletes an object at the specified path.</p>
     */
    deleteObject(args: DeleteObjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteObjectCommandOutput>;
    deleteObject(args: DeleteObjectCommandInput, cb: (err: any, data?: DeleteObjectCommandOutput) => void): void;
    deleteObject(args: DeleteObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteObjectCommandOutput) => void): void;
    /**
     * <p>Gets the headers for an object at the specified path.</p>
     */
    describeObject(args: DescribeObjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeObjectCommandOutput>;
    describeObject(args: DescribeObjectCommandInput, cb: (err: any, data?: DescribeObjectCommandOutput) => void): void;
    describeObject(args: DescribeObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeObjectCommandOutput) => void): void;
    /**
     * <p>Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.</p>
     */
    getObject(args: GetObjectCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectCommandOutput>;
    getObject(args: GetObjectCommandInput, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
    getObject(args: GetObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
    /**
     * <p>Provides a list of metadata entries about folders and objects in the specified
     *          folder.</p>
     */
    listItems(args: ListItemsCommandInput, options?: __HttpHandlerOptions): Promise<ListItemsCommandOutput>;
    listItems(args: ListItemsCommandInput, cb: (err: any, data?: ListItemsCommandOutput) => void): void;
    listItems(args: ListItemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListItemsCommandOutput) => void): void;
    /**
     * <p>Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.</p>
     */
    putObject(args: PutObjectCommandInput, options?: __HttpHandlerOptions): Promise<PutObjectCommandOutput>;
    putObject(args: PutObjectCommandInput, cb: (err: any, data?: PutObjectCommandOutput) => void): void;
    putObject(args: PutObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutObjectCommandOutput) => void): void;
}
