import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CreatePlatformVersionRequest, CreatePlatformVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePlatformVersionCommandInput extends CreatePlatformVersionRequest {
}
export interface CreatePlatformVersionCommandOutput extends CreatePlatformVersionResult, __MetadataBearer {
}
/**
 * <p>Create a new version of your custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreatePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreatePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreatePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePlatformVersionCommand extends $Command<CreatePlatformVersionCommandInput, CreatePlatformVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreatePlatformVersionCommandInput;
    constructor(input: CreatePlatformVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlatformVersionCommandInput, CreatePlatformVersionCommandOutput>;
    private serialize;
    private deserialize;
}
