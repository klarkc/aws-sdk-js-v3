import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeletePlatformVersionRequest, DeletePlatformVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePlatformVersionCommandInput extends DeletePlatformVersionRequest {
}
export interface DeletePlatformVersionCommandOutput extends DeletePlatformVersionResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified version of a custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeletePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeletePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeletePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePlatformVersionCommand extends $Command<DeletePlatformVersionCommandInput, DeletePlatformVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeletePlatformVersionCommandInput;
    constructor(input: DeletePlatformVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlatformVersionCommandInput, DeletePlatformVersionCommandOutput>;
    private serialize;
    private deserialize;
}
