import { __extends } from "tslib";
import { RestoreDBInstanceFromS3Message, RestoreDBInstanceFromS3Result } from "../models/models_1";
import { deserializeAws_queryRestoreDBInstanceFromS3Command, serializeAws_queryRestoreDBInstanceFromS3Command, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Amazon Relational Database Service (Amazon RDS)
 *             supports importing MySQL databases by using backup files.
 *             You can create a backup of your on-premises database,
 *             store it on Amazon Simple Storage Service (Amazon S3),
 *             and then restore the backup file onto a new Amazon RDS DB instance running MySQL.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a>
 *             in the <i>Amazon RDS User Guide.</i>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceFromS3Command } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceFromS3Command } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBInstanceFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBInstanceFromS3CommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceFromS3CommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreDBInstanceFromS3Command = /** @class */ (function (_super) {
    __extends(RestoreDBInstanceFromS3Command, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreDBInstanceFromS3Command(input) {
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
    RestoreDBInstanceFromS3Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RestoreDBInstanceFromS3Command";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreDBInstanceFromS3Message.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreDBInstanceFromS3Result.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreDBInstanceFromS3Command.prototype.serialize = function (input, context) {
        return serializeAws_queryRestoreDBInstanceFromS3Command(input, context);
    };
    RestoreDBInstanceFromS3Command.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestoreDBInstanceFromS3Command(output, context);
    };
    return RestoreDBInstanceFromS3Command;
}($Command));
export { RestoreDBInstanceFromS3Command };
//# sourceMappingURL=RestoreDBInstanceFromS3Command.js.map