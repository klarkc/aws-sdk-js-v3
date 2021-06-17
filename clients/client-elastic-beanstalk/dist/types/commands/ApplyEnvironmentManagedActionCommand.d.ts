import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ApplyEnvironmentManagedActionCommandInput extends ApplyEnvironmentManagedActionRequest {
}
export interface ApplyEnvironmentManagedActionCommandOutput extends ApplyEnvironmentManagedActionResult, __MetadataBearer {
}
/**
 * <p>Applies a scheduled managed action immediately. A managed action can be applied only if
 *       its status is <code>Scheduled</code>. Get the status and action ID of a managed action with
 *         <a>DescribeEnvironmentManagedActions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ApplyEnvironmentManagedActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyEnvironmentManagedActionCommandInput} for command's `input` shape.
 * @see {@link ApplyEnvironmentManagedActionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ApplyEnvironmentManagedActionCommand extends $Command<ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ApplyEnvironmentManagedActionCommandInput;
    constructor(input: ApplyEnvironmentManagedActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput>;
    private serialize;
    private deserialize;
}
