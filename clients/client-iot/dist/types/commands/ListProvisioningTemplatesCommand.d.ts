import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListProvisioningTemplatesRequest, ListProvisioningTemplatesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProvisioningTemplatesCommandInput extends ListProvisioningTemplatesRequest {
}
export interface ListProvisioningTemplatesCommandOutput extends ListProvisioningTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Lists the fleet provisioning templates in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListProvisioningTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListProvisioningTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListProvisioningTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProvisioningTemplatesCommand extends $Command<ListProvisioningTemplatesCommandInput, ListProvisioningTemplatesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListProvisioningTemplatesCommandInput;
    constructor(input: ListProvisioningTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisioningTemplatesCommandInput, ListProvisioningTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
