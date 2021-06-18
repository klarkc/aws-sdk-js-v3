import { __extends } from "tslib";
import { CreateStackRequest, CreateStackResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateStackCommand,
  serializeAws_json1_1CreateStackCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStackCommandInput} for command's `input` shape.
 * @see {@link CreateStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStackCommand = /** @class */ (function (_super) {
  __extends(CreateStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateStackCommand(input) {
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
  CreateStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CreateStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStackResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateStackCommand(input, context);
  };
  CreateStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateStackCommand(output, context);
  };
  return CreateStackCommand;
})($Command);
export { CreateStackCommand };
//# sourceMappingURL=CreateStackCommand.js.map
