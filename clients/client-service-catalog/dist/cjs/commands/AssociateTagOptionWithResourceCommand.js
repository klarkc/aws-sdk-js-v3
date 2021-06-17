"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateTagOptionWithResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associate the specified TagOption with the specified portfolio or product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateTagOptionWithResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTagOptionWithResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateTagOptionWithResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateTagOptionWithResourceCommand extends smithy_client_1.Command {
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
        const clientName = "ServiceCatalogClient";
        const commandName = "AssociateTagOptionWithResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateTagOptionWithResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateTagOptionWithResourceOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AssociateTagOptionWithResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AssociateTagOptionWithResourceCommand(output, context);
    }
}
exports.AssociateTagOptionWithResourceCommand = AssociateTagOptionWithResourceCommand;
//# sourceMappingURL=AssociateTagOptionWithResourceCommand.js.map