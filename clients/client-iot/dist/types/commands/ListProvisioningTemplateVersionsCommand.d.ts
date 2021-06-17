import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListProvisioningTemplateVersionsRequest, ListProvisioningTemplateVersionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProvisioningTemplateVersionsCommandInput extends ListProvisioningTemplateVersionsRequest {
}
export interface ListProvisioningTemplateVersionsCommandOutput extends ListProvisioningTemplateVersionsResponse, __MetadataBearer {
}
/**
 * <p>A list of fleet provisioning template versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListProvisioningTemplateVersionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListProvisioningTemplateVersionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListProvisioningTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProvisioningTemplateVersionsCommand extends $Command<ListProvisioningTemplateVersionsCommandInput, ListProvisioningTemplateVersionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListProvisioningTemplateVersionsCommandInput;
    constructor(input: ListProvisioningTemplateVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisioningTemplateVersionsCommandInput, ListProvisioningTemplateVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
