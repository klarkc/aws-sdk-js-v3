import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateHsmConfigurationMessage, CreateHsmConfigurationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateHsmConfigurationCommandInput extends CreateHsmConfigurationMessage {
}
export interface CreateHsmConfigurationCommandOutput extends CreateHsmConfigurationResult, __MetadataBearer {
}
/**
 * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift
 *             cluster to store and use database encryption keys in a Hardware Security Module (HSM).
 *             After creating the HSM configuration, you can specify it as a parameter when creating a
 *             cluster. The cluster will then store its encryption keys in the HSM.</p>
 *         <p>In addition to creating an HSM configuration, you must also create an HSM client
 *             certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
 *             in the Amazon Redshift Cluster Management Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateHsmConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateHsmConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateHsmConfigurationCommand extends $Command<CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateHsmConfigurationCommandInput;
    constructor(input: CreateHsmConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
