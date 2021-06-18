import { __extends } from "tslib";
import { ListBranchesRequest, ListBranchesResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListBranchesCommand,
  serializeAws_restJson1ListBranchesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Lists the branches of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListBranchesCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListBranchesCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new ListBranchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBranchesCommandInput} for command's `input` shape.
 * @see {@link ListBranchesCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBranchesCommand = /** @class */ (function (_super) {
  __extends(ListBranchesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBranchesCommand(input) {
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
  ListBranchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "ListBranchesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBranchesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBranchesResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBranchesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBranchesCommand(input, context);
  };
  ListBranchesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBranchesCommand(output, context);
  };
  return ListBranchesCommand;
})($Command);
export { ListBranchesCommand };
//# sourceMappingURL=ListBranchesCommand.js.map
