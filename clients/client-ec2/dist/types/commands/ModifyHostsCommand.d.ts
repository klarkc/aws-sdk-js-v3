import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyHostsRequest, ModifyHostsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyHostsCommandInput extends ModifyHostsRequest {
}
export interface ModifyHostsCommandOutput extends ModifyHostsResult, __MetadataBearer {
}
/**
 * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled,
 *             any instances that you launch with a tenancy of <code>host</code> but without a specific host
 *         	ID are placed onto any available Dedicated Host in your account that has auto-placement enabled.
 *         	When auto-placement is disabled, you need to provide a host ID to have the instance launch onto
 *         	a specific host. If no host ID is provided, the instance is launched onto a suitable host with
 *         	auto-placement enabled.</p>
 *     	    <p>You can also use this API action to modify a Dedicated Host to support either multiple
 *     		instance types in an instance family, or to support a specific instance type only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyHostsCommandInput} for command's `input` shape.
 * @see {@link ModifyHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyHostsCommand extends $Command<ModifyHostsCommandInput, ModifyHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyHostsCommandInput;
    constructor(input: ModifyHostsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyHostsCommandInput, ModifyHostsCommandOutput>;
    private serialize;
    private deserialize;
}
