"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutBorrowLicenseCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Checks out the specified license for offline use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutBorrowLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutBorrowLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckoutBorrowLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckoutBorrowLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutBorrowLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CheckoutBorrowLicenseCommand extends smithy_client_1.Command {
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
        const commandName = "CheckoutBorrowLicenseCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CheckoutBorrowLicenseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CheckoutBorrowLicenseResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CheckoutBorrowLicenseCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CheckoutBorrowLicenseCommand(output, context);
    }
}
exports.CheckoutBorrowLicenseCommand = CheckoutBorrowLicenseCommand;
//# sourceMappingURL=CheckoutBorrowLicenseCommand.js.map