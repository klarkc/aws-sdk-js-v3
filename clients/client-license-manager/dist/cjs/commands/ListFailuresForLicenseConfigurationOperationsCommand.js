"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFailuresForLicenseConfigurationOperationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the license configuration operations that failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListFailuresForLicenseConfigurationOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandInput} for command's `input` shape.
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListFailuresForLicenseConfigurationOperationsCommand extends smithy_client_1.Command {
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
        const clientName = "LicenseManagerClient";
        const commandName = "ListFailuresForLicenseConfigurationOperationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListFailuresForLicenseConfigurationOperationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListFailuresForLicenseConfigurationOperationsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(output, context);
    }
}
exports.ListFailuresForLicenseConfigurationOperationsCommand = ListFailuresForLicenseConfigurationOperationsCommand;
//# sourceMappingURL=ListFailuresForLicenseConfigurationOperationsCommand.js.map