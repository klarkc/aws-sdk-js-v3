import { __extends } from "tslib";
import { CreatePreparedStatementInput, CreatePreparedStatementOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePreparedStatementCommand,
  serializeAws_json1_1CreatePreparedStatementCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a prepared statement for use with SQL queries in Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link CreatePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePreparedStatementCommand = /** @class */ (function (_super) {
  __extends(CreatePreparedStatementCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreatePreparedStatementCommand(input) {
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
  CreatePreparedStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "CreatePreparedStatementCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreatePreparedStatementInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePreparedStatementOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreatePreparedStatementCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreatePreparedStatementCommand(input, context);
  };
  CreatePreparedStatementCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreatePreparedStatementCommand(output, context);
  };
  return CreatePreparedStatementCommand;
})($Command);
export { CreatePreparedStatementCommand };
//# sourceMappingURL=CreatePreparedStatementCommand.js.map
