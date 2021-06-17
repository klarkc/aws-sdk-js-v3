import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ContainsPiiEntitiesRequest, ContainsPiiEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ContainsPiiEntitiesCommandInput extends ContainsPiiEntitiesRequest {
}
export interface ContainsPiiEntitiesCommandOutput extends ContainsPiiEntitiesResponse, __MetadataBearer {
}
/**
 * <p>Analyzes input text for the presence of personally identifiable information (PII) and
 *       returns the labels of identified PII entity types such as name, address, bank account number,
 *       or phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ContainsPiiEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ContainsPiiEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ContainsPiiEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ContainsPiiEntitiesCommandInput} for command's `input` shape.
 * @see {@link ContainsPiiEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ContainsPiiEntitiesCommand extends $Command<ContainsPiiEntitiesCommandInput, ContainsPiiEntitiesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ContainsPiiEntitiesCommandInput;
    constructor(input: ContainsPiiEntitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ContainsPiiEntitiesCommandInput, ContainsPiiEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
