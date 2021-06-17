import { __extends } from "tslib";
import { DescribeCertificatesMessage, DescribeCertificatesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeCertificatesCommand, serializeAws_json1_1DescribeCertificatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a description of the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeCertificatesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeCertificatesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCertificatesCommand = /** @class */ (function (_super) {
    __extends(DescribeCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCertificatesCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCertificatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCertificatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCertificatesCommand(input, context);
    };
    DescribeCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCertificatesCommand(output, context);
    };
    return DescribeCertificatesCommand;
}($Command));
export { DescribeCertificatesCommand };
//# sourceMappingURL=DescribeCertificatesCommand.js.map