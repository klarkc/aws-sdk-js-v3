import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListComponentVersionsRequest, ListComponentVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListComponentVersionsCommandInput extends ListComponentVersionsRequest {
}
export interface ListComponentVersionsCommandOutput extends ListComponentVersionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of all versions for a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListComponentVersionsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListComponentVersionsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListComponentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListComponentVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListComponentVersionsCommand extends $Command<ListComponentVersionsCommandInput, ListComponentVersionsCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: ListComponentVersionsCommandInput;
    constructor(input: ListComponentVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComponentVersionsCommandInput, ListComponentVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
