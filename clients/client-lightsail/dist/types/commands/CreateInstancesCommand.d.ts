import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateInstancesRequest, CreateInstancesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInstancesCommandInput extends CreateInstancesRequest {
}
export interface CreateInstancesCommandOutput extends CreateInstancesResult, __MetadataBearer {
}
/**
 * <p>Creates one or more Amazon Lightsail instances.</p>
 *          <p>The <code>create instances</code> operation supports tag-based access control via request
 *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateInstancesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateInstancesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstancesCommandInput} for command's `input` shape.
 * @see {@link CreateInstancesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInstancesCommand extends $Command<CreateInstancesCommandInput, CreateInstancesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateInstancesCommandInput;
    constructor(input: CreateInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstancesCommandInput, CreateInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
