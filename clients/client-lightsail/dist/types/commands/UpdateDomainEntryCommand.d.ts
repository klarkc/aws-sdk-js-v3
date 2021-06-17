import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateDomainEntryRequest, UpdateDomainEntryResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDomainEntryCommandInput extends UpdateDomainEntryRequest {
}
export interface UpdateDomainEntryCommandOutput extends UpdateDomainEntryResult, __MetadataBearer {
}
/**
 * <p>Updates a domain recordset after it is created.</p>
 *          <p>The <code>update domain entry</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>domain name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDomainEntryCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDomainEntryCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDomainEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainEntryCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainEntryCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDomainEntryCommand extends $Command<UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateDomainEntryCommandInput;
    constructor(input: UpdateDomainEntryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput>;
    private serialize;
    private deserialize;
}
