import { __extends } from "tslib";
import { CreateBranchRequest, CreateBranchResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBranchCommand,
  serializeAws_restJson1CreateBranchCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new branch for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, CreateBranchCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, CreateBranchCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new CreateBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBranchCommandInput} for command's `input` shape.
 * @see {@link CreateBranchCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBranchCommand = /** @class */ (function (_super) {
  __extends(CreateBranchCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBranchCommand(input) {
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
  CreateBranchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "CreateBranchCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBranchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBranchResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBranchCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBranchCommand(input, context);
  };
  CreateBranchCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBranchCommand(output, context);
  };
  return CreateBranchCommand;
})($Command);
export { CreateBranchCommand };
//# sourceMappingURL=CreateBranchCommand.js.map
