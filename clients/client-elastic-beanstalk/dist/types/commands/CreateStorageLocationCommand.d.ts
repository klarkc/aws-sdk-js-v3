import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CreateStorageLocationResultMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateStorageLocationCommandInput {
}
export interface CreateStorageLocationCommandOutput extends CreateStorageLocationResultMessage, __MetadataBearer {
}
/**
 * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
 *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
 *       first time you create an environment in a region. If the storage location already exists,
 *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
 *       bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateStorageLocationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateStorageLocationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateStorageLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStorageLocationCommandInput} for command's `input` shape.
 * @see {@link CreateStorageLocationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStorageLocationCommand extends $Command<CreateStorageLocationCommandInput, CreateStorageLocationCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateStorageLocationCommandInput;
    constructor(input: CreateStorageLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStorageLocationCommandInput, CreateStorageLocationCommandOutput>;
    private serialize;
    private deserialize;
}
