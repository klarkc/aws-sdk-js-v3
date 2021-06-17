"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHealthChecksCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieve a list of the health checks that are associated with the current AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHealthChecksCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHealthChecksCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHealthChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListHealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListHealthChecksCommand extends smithy_client_1.Command {
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
        const clientName = "Route53Client";
        const commandName = "ListHealthChecksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListHealthChecksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListHealthChecksResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlListHealthChecksCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlListHealthChecksCommand(output, context);
    }
}
exports.ListHealthChecksCommand = ListHealthChecksCommand;
//# sourceMappingURL=ListHealthChecksCommand.js.map