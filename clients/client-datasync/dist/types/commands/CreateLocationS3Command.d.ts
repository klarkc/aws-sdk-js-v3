import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationS3Request, CreateLocationS3Response } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLocationS3CommandInput extends CreateLocationS3Request {
}
export interface CreateLocationS3CommandOutput extends CreateLocationS3Response, __MetadataBearer {
}
/**
 * <p>Creates an endpoint for an Amazon S3 bucket.</p>
 *
 *
 *          <p>For
 *       more information, see
 *       https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli
 *       in the <i>AWS DataSync User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationS3CommandInput} for command's `input` shape.
 * @see {@link CreateLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLocationS3Command extends $Command<CreateLocationS3CommandInput, CreateLocationS3CommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationS3CommandInput;
    constructor(input: CreateLocationS3CommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationS3CommandInput, CreateLocationS3CommandOutput>;
    private serialize;
    private deserialize;
}
