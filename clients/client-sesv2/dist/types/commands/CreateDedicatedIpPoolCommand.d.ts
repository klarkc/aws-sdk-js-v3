import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { CreateDedicatedIpPoolRequest, CreateDedicatedIpPoolResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDedicatedIpPoolCommandInput extends CreateDedicatedIpPoolRequest {
}
export interface CreateDedicatedIpPoolCommandOutput extends CreateDedicatedIpPoolResponse, __MetadataBearer {
}
/**
 * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 *             IP addresses that are associated with your AWS account. You can associate a pool with
 *             a configuration set. When you send an email that uses that configuration set, the
 *             message is sent from one of the addresses in the associated pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateDedicatedIpPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateDedicatedIpPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link CreateDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDedicatedIpPoolCommand extends $Command<CreateDedicatedIpPoolCommandInput, CreateDedicatedIpPoolCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: CreateDedicatedIpPoolCommandInput;
    constructor(input: CreateDedicatedIpPoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDedicatedIpPoolCommandInput, CreateDedicatedIpPoolCommandOutput>;
    private serialize;
    private deserialize;
}
