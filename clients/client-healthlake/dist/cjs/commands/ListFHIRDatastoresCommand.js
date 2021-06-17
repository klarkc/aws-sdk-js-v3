"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFHIRDatastoresCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store
 *          status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRDatastoresCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRDatastoresCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new ListFHIRDatastoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFHIRDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListFHIRDatastoresCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListFHIRDatastoresCommand extends smithy_client_1.Command {
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
        const commandName = "ListFHIRDatastoresCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListFHIRDatastoresRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListFHIRDatastoresResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0ListFHIRDatastoresCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0ListFHIRDatastoresCommand(output, context);
    }
}
exports.ListFHIRDatastoresCommand = ListFHIRDatastoresCommand;
//# sourceMappingURL=ListFHIRDatastoresCommand.js.map