"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeFHIRDatastoreCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets the properties associated with the FHIR Data Store, including the Data Store ID,
 *          Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and
 *          Data Store endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new DescribeFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeFHIRDatastoreCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "HealthLakeClient";
        const commandName = "DescribeFHIRDatastoreCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeFHIRDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeFHIRDatastoreResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0DescribeFHIRDatastoreCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0DescribeFHIRDatastoreCommand(output, context);
    }
}
exports.DescribeFHIRDatastoreCommand = DescribeFHIRDatastoreCommand;
//# sourceMappingURL=DescribeFHIRDatastoreCommand.js.map