"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRegistryCatalogDataCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves catalog metadata for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRegistryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRegistryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new GetRegistryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetRegistryCatalogDataCommand extends smithy_client_1.Command {
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
        const clientName = "ECRPUBLICClient";
        const commandName = "GetRegistryCatalogDataCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRegistryCatalogDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRegistryCatalogDataResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetRegistryCatalogDataCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetRegistryCatalogDataCommand(output, context);
    }
}
exports.GetRegistryCatalogDataCommand = GetRegistryCatalogDataCommand;
//# sourceMappingURL=GetRegistryCatalogDataCommand.js.map